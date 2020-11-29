<template>
  <div class="container pt-5">
    <!-- Inputs -->
    <div class="column">
      <div class="box">
        <h1 class="subtitle">📝 Enter your server's details</h1>
        <div class="columns">
          <div class="field column">
            <label class="label" for="jarFileName">Your server's jarfile name <information-icon data-tooltip="The file you start your server with."></information-icon></label>
            <div class="control">
              <input class="input" type="text" placeholder="server.jar, paper-247.jar, etc..." id="jarFileName">
            </div>
            <p class="help is-danger is-hidden" id="jarfile-help">You might be missing .jar</p>
          </div>
          <div class="field column">
            <label class="label" for="ram">RAM allocation <information-icon data-tooltip="How much RAM you intend to allocate to your server."></information-icon></label>
            <div class="control">
              <input class="input" type="text" placeholder="10G" id="ram">
            </div>
            <p class="help is-danger is-hidden" id="ram-help">You might be missing the memory size. M = megabytes, G = gigabytes</p>
          </div>
          <div class="field column">
            <label class="label" for="gui">Enable the Server GUI? <information-icon data-tooltip="Would you like to enable the built-in server GUI? (The answer is usually no.)"></information-icon></label>
            <div class="control">
              <input class="checkbox" type="checkbox" id="gui">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="box">
        <h1 class="subtitle">💾 Copy your start script</h1>
          <pre class="p-0 m-0 script" id="script">Waiting for Input</pre>
        <p class="py-2 is-size-6 is-hidden" id="help-text">This might look scary, but don't worry. You can hover over a flag to learn more about it's purpose!</p>
      </div>
    </div>
    <div class="column">
      <div class="box">
        <h1 class="subtitle">🖥️ Start your server!</h1>
      </div>
    </div>
    <div class="flag-popup hide" id="popup">
      <article class="message">
        <div class="message-header"></div>
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
  "-XX:+ParallelRefProcEnabled": "",
  "-XX:MaxGCPauseMillis=200": "",
  "-XX:+UnlockExperimentalVMOptions": "",
  "-XX:+DisableExplicitGC": "",
  "-XX:+AlwaysPreTouch": "",
  "-XX:G1NewSizePercent=30": "",
  "-XX:G1MaxNewSizePercent=40": "",
  "-XX:G1HeapRegionSize=8M": "",
  "-XX:G1ReservePercent=20": "",
  "-XX:G1HeapWastePercent=5": "",
  "-XX:G1MixedGCCountTarget=4": "",
  "-XX:InitiatingHeapOccupancyPercent=15": "",
  "-XX:G1MixedGCLiveThresholdPercent=90": "",
  "-XX:G1RSetUpdatingPauseTimePercent=5": "",
  "-XX:SurvivorRatio=32": "",
  "-XX:+PerfDisableSharedMem": "",
  "-XX:MaxTenuringThreshold=1": "",
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

  document.addEventListener('mousemove', (e) => {
    let element = e.target;
    let popup = document.getElementById('popup')

    if (element.classList.contains("flag")) {
      let flag = element.innerHTML.trim()

      let description = flags[flag];

      let popup = document.getElementById("popup")

      let headerElement = popup.children[0].children[0]

      let bodyElement = popup.children[0].children[1]
      headerElement.innerHTML = flag

      bodyElement.innerHTML = description

      popup.classList.remove("hide")

      let x = (e.clientX - 170);
      let y = (e.clientY - 90);

      popup.style.top = y + "px"
      popup.style.left = x + "px"
    } else {
      popup.classList.add("hide")
    }
  });

  const status = document.getElementById("script");
  let dotCount = 0;
  window.setInterval(function() {
    if (!waitingForCode) return;
    if (dotCount < 3) {
        ++dotCount;
        status.innerHTML += ".";
    } else {
        status.innerHTML = "Waiting for Input";
        dotCount = 0;
    }
  }, 450);
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

function regenCode() {
  let ram = getRam();
  let isGuiEnabled = getGui();
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

  // eslint-disable-next-line no-unused-vars
  let i = 0;

  for (let flag in flags) {
    i++;
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
  let suffix = ` -jar ${jarName} ${isGuiEnabled ? '' : ' nogui'}`

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
}

.hide {
  opacity: 0 !important;
}

</style>