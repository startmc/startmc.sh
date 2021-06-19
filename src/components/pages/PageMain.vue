<template>
  <div class="container pt-5">
    <div class="column">
      <div class="box">
        <h1 class="subtitle">📝 Enter your server's details</h1>
        <div class="columns">
          <div class="field column">
            <label class="label" for="jarFileName">Your server's jarfile name
              <information-icon data-tooltip="The file you start your server with."></information-icon>
            </label>
            <div class="control">
              <input class="input" type="text" placeholder="server.jar, paper-247.jar, etc..." id="jarFileName">
            </div>
            <p class="help is-danger is-hidden" id="jarfile-help">You might be missing .jar</p>
          </div>
          <div class="field column">
            <label class="label" for="ram">RAM allocation
              <information-icon data-tooltip="How much RAM you intend to allocate to your server."></information-icon>
            </label>
            <div class="control">
              <input class="input" type="text" placeholder="10G" id="ram">
            </div>
            <p class="help is-danger is-hidden" id="ram-help">You might be missing the memory size. M = megabytes, G =
              gigabytes</p>
          </div>
          <div class="field column">
            <label class="label" for="gui">Enable the Server GUI?
              <information-icon
                  data-tooltip="Would you like to enable the built-in server GUI? (The answer is usually no.)"></information-icon>
            </label>
            <div class="control">
              <!-- TODO: Nicer checkbox class -->
              <input class="checkbox" type="checkbox" id="gui">
            </div>
          </div>
          <div class="field column">
            <label class="label" for="ptero">Are you on Pterodactyl Panel?
              <information-icon
                  data-tooltip="Is your server running on Pterodactyl Panel?"></information-icon>
            </label>
            <div class="control">
              <!-- TODO: Nicer checkbox class -->
              <input class="checkbox" type="checkbox" id="ptero">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="box">
        <!-- TODO: Click to copy to clipboard -->
        <h1 class="subtitle">💾 Copy your start script</h1>
        <pre class="p-0 m-0 script" id="script">Waiting for input</pre>
        <p class="py-2 is-size-6 is-hidden" id="help-text">This might look scary, but don't worry. You can hover over a
          flag to learn more about it's purpose!</p>
      </div>
    </div>
    <div class="column">
      <div class="box">
        <h1 class="subtitle">🖥️ Start your server!</h1>
      </div>
    </div>
    <br>
    <div class="flag-popup hide" id="popup">
      <article class="message">
        <div class="message-header" style="font-size: 3rem;"></div>
        <div class="message-body" style="border: solid #4A4A4A 1px;"></div>
      </article>
    </div>
  </div>
</template>

<script>
import InformationIcon from 'vue-material-design-icons/Information'

export default {
  name: "PageMain",
  components: {
    InformationIcon
  }
}

let flags = {
  "-XX:+UseG1GC": "This enables the Java G1 garbage collector.",
  "-XX:+ParallelRefProcEnabled": " Optimizes the garbage collector process to use multiple threads for weak reference checking.",
  "-XX:MaxGCPauseMillis=200": "This tells the JVM to aim for a max garbage collection time of 200 milliseconds. This is useful, because long pauses for garbage collection will interfere with your server's performance.",
  "-XX:+UnlockExperimentalVMOptions": "This enables experimental JVM flags. Don't worry, these flags have been created by one of the smartest members of our community, and tested by thousands of servers.",
  "-XX:+DisableExplicitGC": "This disables the System.gc() method call. Plugins may think they are doing something good by explicitly calling the GC, but in this case it is best to leave it up to the JVM.",
  "-XX:+AlwaysPreTouch": "This allocates all of the RAM for the server on startup. Incremental allocations during runtime may impact performance, so this prevents that.",
  "-XX:G1NewSizePercent=30": "This gives the GC more room to breathe, and results in less GC cycles (and thus less lag.)",
  "-XX:G1MaxNewSizePercent=40": "This gives the GC more room to breathe, and results in less GC cycles (and thus less lag.)",
  "-XX:G1HeapRegionSize=8M": "This sends fewer objects to the old gen, which means there will be less time spent cleaning up old gen memory.",
  "-XX:G1ReservePercent=20": "This ensures that there is more space for memory to move around.",
  "-XX:G1HeapWastePercent=5": "Sets the percentage of heap that you are willing to waste. The Java HotSpot VM does not initiate the mixed garbage collection cycle when the reclaimable percentage is less than the heap waste percentage.",
  "-XX:G1MixedGCCountTarget=4": "This instructs the JVM to reclaim old gen ",
  "-XX:InitiatingHeapOccupancyPercent=15": "Sets the Java heap occupancy threshold that triggers a marking cycle. ",
  "-XX:G1MixedGCLiveThresholdPercent=90": "This sends fewer objects to the old gen, which means there will be less time spent cleaning up old gen memory.",
  "-XX:G1RSetUpdatingPauseTimePercent=5": "Reduces GC pause durations.",
  "-XX:SurvivorRatio=32": "Reduces the survivor space, as MaxTenuringTheshold was increased.",
  "-XX:+PerfDisableSharedMem": "Prevents the GC from writing to the file system. File system IO may take a very long time, which is why we disable it.",
  "-XX:MaxTenuringThreshold=1": "This delays the collection of longer lived memory, and therefore decreases pause times (and improves server performance).",
  "-Daikars.new.flags=true": "This tells the Paper timings system that you are using the updated version of Aikar's flags.",
  "-Dusing.aikars.flags=https://mcflags.emc.gs": "This tells the Paper timings system that you are using Aikar's flags.",
}

let scriptElement;

let waitingForCode = true;

document.addEventListener("DOMContentLoaded", function () {
  scriptElement = document.getElementById("script");

  document.getElementById('ram').addEventListener("input", regenCode);
  document.getElementById('jarFileName').addEventListener("input", regenCode);
  document.getElementById('gui').addEventListener("change", regenCode);
  document.getElementById('ptero').addEventListener("change", regenCode);

  document.addEventListener('mousemove', (e) => {
    let element = e.target;
    let popup = document.getElementById('popup')

    if (element.classList.contains("flag")) {
      let flag = element.innerHTML.trim()

      let description = flags[flag];

      let headerElement = popup.children[0].children[0]

      let bodyElement = popup.children[0].children[1]
      headerElement.innerHTML = flag

      bodyElement.innerHTML = description

      popup.classList.remove("hide")

      let x = element.offsetLeft + (element.clientWidth / 2)
      let y = element.offsetTop + 100

      console.log(x, y)

      popup.style.left = x + "px";
      popup.style.top = y + "px";
    } else {
      popup.classList.add("hide")
    }

    console.log(element.id, popup.id)
  });

  const status = document.getElementById("script");
  let dotCount = 0;
  window.setInterval(function () {
    if (!waitingForCode) return;
    if (dotCount < 3) {
      ++dotCount;
      if (!status.innerHTML.startsWith('Waiting for input')) {
        status.innerHTML = "Waiting for input";
      }
      status.innerHTML += ".";
    } else {
      status.innerHTML = "Waiting for input";
      dotCount = 0;
    }
  }, 500);
});

function getRam() {
  return document.getElementById('ram').value;
}

function getJarFileName() {
  return document.getElementById('jarFileName').value;
}

function getGui() {
  return document.getElementById("gui").checked
}

function getPtero() {
  return document.getElementById("ptero").checked
}

function isMoreThen12(value, suffix) {
    return ((suffix === "G" || suffix === "g") && value > 12) || ((suffix === "M" || suffix === "m") && value > 12000);
}

function regenCode() {
  let ram = getRam();
  let ramValue = ram.replace(/[^0-9]/g, '');
  let ramSuffix = ram.slice(-1);
  
  let isGuiEnabled = getGui();
  let isPteroUsed = getPtero();
  let jarName = getJarFileName();

  // check ram validity
  if (ram !== '' && ram.match(/([MmGg])$/) == null) {
    document.getElementById("ram").classList.add("is-warning")
    document.getElementById("ram-help").classList.remove("is-hidden")
  } else {
    document.getElementById("ram").classList.remove("is-warning")
    document.getElementById("ram-help").classList.add("is-hidden")
  }

  // check jar validity
  if (jarName !== '' && jarName.match(/.jar$/) == null) {
    document.getElementById("jarFileName").classList.add("is-warning")
    document.getElementById("jarfile-help").classList.remove("is-hidden")

  } else {
    document.getElementById("jarFileName").classList.remove("is-warning")
    document.getElementById("jarfile-help").classList.add("is-hidden")
  }

  if (ram === '' && jarName === '') {
    waitingForCode = true;
    return;
  }

  if (ram === '' || jarName === '') {
    return;
  }

  waitingForCode = false;
  scriptElement.innerHTML = ""

  // create prefix element
  let prefix = `java -Xms${ram} -Xmx${ram} `

  let prefixElement = document.createElement("span")

  prefixElement.innerText = prefix

  // add prefix to elem
  scriptElement.append(prefixElement)
  
  if (isPteroUsed) {
	flags["-Dterminal.jline=false"] = "This disables the JLine library, used for handling console input.";
	flags["-Dterminal.ansi=true"] = "This enables the Ansi library, used for handling console input.";
  } else {
	delete flags["-Dterminal.jline=false"];
	delete flags["-Dterminal.ansi=true"];
  }

  // eslint-disable-next-line no-unused-vars
  let i = 0;

  for (let flag in flags) {
    i++;
    
    // exclude AlwaysPreTouch for pterodactyl
    // see https://github.com/startmc/startmc.sh/issues/4
    if (isPteroUsed && flag === "-XX:+AlwaysPreTouch") continue;
    
    // change flags if more then 12GB
    // see https://github.com/startmc/startmc.sh/issues/1
    if (isMoreThen12(ramValue, ramSuffix)) {
        if (flag === "-XX:G1NewSizePercent=30") {
            flag = "-XX:G1NewSizePercent=40";
        } else if (flag === "-XX:G1MaxNewSizePercent=40") {
            flag = "-XX:G1MaxNewSizePercent=50";
        } else if (flag === "-XX:G1HeapRegionSize=8M") {
            flag = "-XX:G1HeapRegionSize=16M";
        } else if (flag === "-XX:G1ReservePercent=20") {
            flag = "-XX:G1ReservePercent=15";
        } else if (flag === "-XX:InitiatingHeapOccupancyPercent=15") {
            flag = "-XX:InitiatingHeapOccupancyPercent=20";
        }
    }
    
    console.log(ramValue + " " + ramSuffix);
    
    // change flags if more then 12GB
    // see https://github.com/startmc/startmc.sh/issues/1
    if (isMoreThen12(ramValue, ramSuffix)) {
        if (flag === "-XX:G1NewSizePercent=30") {
            flag = "-XX:G1NewSizePercent=40";
        } else if (flag === "-XX:G1MaxNewSizePercent=40") {
            flag = "-XX:G1MaxNewSizePercent=50";
        } else if (flag === "-XX:G1HeapRegionSize=8M") {
            flag = "-XX:G1HeapRegionSize=16M";
        } else if (flag === "-XX:G1ReservePercent=20") {
            flag = "-XX:G1ReservePercent=15";
        } else if (flag === "-XX:InitiatingHeapOccupancyPercent=15") {
            flag = "-XX:InitiatingHeapOccupancyPercent=20";
        }
    }
    
    let flagElement = document.createElement("span")
    flagElement.style.whiteSpace = 'nowrap'
    flagElement.id = flag
    flagElement.innerText = flag
    flagElement.classList.add("flag")

    if (i % 2 === 0) {
      flagElement.style.color = "#382e94"
    } else {
      flagElement.style.color = "#000000"
    }

    scriptElement.append(flagElement)

    let spacer = document.createElement("span")
    spacer.innerText = ' '

    scriptElement.append(spacer)

    document.getElementById("help-text").classList.remove("is-hidden")
  }

  // create suffix element
  let suffix = ` -jar ${jarName} ${isGuiEnabled ? '' : ' --nogui'}`

  let suffixElement = document.createElement("span")

  suffixElement.innerText = suffix

  // append suffix to element
  scriptElement.append(suffixElement)
}
</script>

<style scoped>

.flag-popup {
  width: 24em;
  min-height: 5em;
  position: absolute;
}

.script {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  padding: 1em !important;
  line-height: 2.4em;
}

.message-header {
  white-space: nowrap;
  word-break: keep-all;
}

#popup {
  opacity: 1;
  transition: opacity 0.1s linear;
  z-index: 1;
}

.hide {
  opacity: 0 !important;
}

</style>