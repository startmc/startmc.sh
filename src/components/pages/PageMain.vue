<template>
  <div class="container pt-5">
    <!-- Inputs -->
    <div class="column">
      <div class="box">
        <h1 class="subtitle">📝 Enter your server's details</h1>
        <div class="columns">
          <div class="field column">
            <label class="label" for="jarFileName">Your server's jarfile name</label>
            <div class="control">
              <input class="input" type="text" placeholder="server.jar, paper-247.jar, etc..." id="jarFileName">
            </div>
          </div>
          <div class="field column">
            <label class="label" for="ram">RAM allocation</label>
            <div class="control">
              <input class="input" type="text" placeholder="10G" id="ram">
            </div>
          </div>
          <div class="field column">
            <label class="label" for="gui">Enable the Server GUI?</label>
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
        <pre class="p-0 m-0 script-container">
          <code class="p-0 m-0 script" id="script">Waiting for input...</code>
        </pre>
        <p class="py-2 is-size-6">This might look scary, but don't worry. You can click on a flag to learn more about
          it's purpose!</p>
      </div>
    </div>
    <div class="column">
      <div class="box">
        <h1 class="subtitle">🖥️ Start your server!</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageMain"
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('ram').addEventListener("input", regenCode);
  document.getElementById('jarFileName').addEventListener("input", regenCode);
  document.getElementById('gui').addEventListener("change", regenCode);
});

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
  "-Dusing.aikars.flags=https://mcflags.emc.gs": "This tells the Paper timings system that you are using aikar's flags.",
  "-Daikars.new.flags=true": "This tells the Paper timings sytem that you are using the updated version of aikar's flags.",
}

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
  console.log('regenning..... xddd hi blue')

  let ram = getRam();
  let isGuiEnabled = getGui();
  let jarName = getJarFileName();

  if (ram === '' || jarName === '') {
    return;
  }

  let code = `java -Xms${ram} -Xmx${ram}`

  for (var key in Object.keys(flags)) {
    code += key + " "
  }

  if (isGuiEnabled) {
    code += 'nogui'
  }

  //let code = `java -Xms${ram} -Xmx${ram} -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar ${jarName}${isGuiEnabled ? ' nogui' : ''}`;

  document.querySelector('#script').innerHTML = code;
}
</script>

<style scoped>
.script-container {
  background-color: #d7d7d7;
}

.script {
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.script-container {
  word-wrap: break-word;
}
</style>