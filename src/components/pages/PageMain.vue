<template>
  <div class="container pt-5">
    <!-- Inputs -->
      <div class="column">
        <div class="box">
          <h1 class="subtitle">Enter your server's details</h1>
          <div class="columns">
            <div class="field column">
              <label class="label" for="jarFileName">Server jar filename</label>
              <div class="control">
                <input class="input" type="text" placeholder="server.jar, paper-247.jar, etc..." id="jarFileName">
              </div>
            </div>
            <div class="field column">
              <label class="label" for="minRam">Min RAM allocation</label>
              <div class="control">
                <input class="input" type="text" placeholder="10G" id="minRam">
              </div>
            </div>
            <div class="field column">
              <label class="label" for="maxRam">Max RAM allocation</label>
              <div class="control">
                <input class="input" type="text" placeholder="10G" id="maxRam">
              </div>
            </div>
            <div class="field column">
              <label class="label" for="gui">Use GUI?</label>
              <div class="control">
                <input class="checkbox" type="checkbox" id="gui">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h1 class="subtitle">Copy your start script</h1>
          <pre class="p-0 m-0">
            <code class="p-0" id="script"></code>
          </pre>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "PageMain"
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('minRam').addEventListener("input", regenCode);
    document.getElementById('maxRam').addEventListener("input", regenCode);
    document.getElementById('jarFileName').addEventListener("input", regenCode);
    document.getElementById('gui').addEventListener("change", regenCode);
  });

  function minRam() {
    let minRam = document.getElementById('minRam').value;
    if (minRam == '') {
      minRam = '10G';
    }
    return minRam;
  }
  function maxRam() {
    let maxRam = document.getElementById('maxRam').value;
    if (maxRam == '') {
      maxRam = '10G';
    }
    return maxRam;
  }
  function getJarFileName() {
    let jarFileName = document.getElementById('jarFileName').value;
    if (jarFileName == '') {
      jarFileName = 'yatopia_1-16-4.jar';
    }
    return jarFileName;
  }
  function getGui() {
    return document.getElementById("gui").checked
  }

  function regenCode() {
    console.log('regenning..... xddd hi blue')
    let code = `java -Xms${ minRam() } -Xmx${ maxRam() } -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar ${ getJarFileName() }`;
    if (getGui()) {
      code += ' nogui';
    }
    document.querySelector('#script').innerHTML = code;
  }
</script>

<style scoped>

</style>