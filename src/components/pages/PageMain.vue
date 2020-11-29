<template>
  <div class="container pt-5">
    <!-- Inputs -->
      <div class="column">
        <div class="box">
          <h1 class="subtitle">Enter your server's details</h1>
          <div class="columns">
            <div class="field column">
              <label class="label">Server jar filename</label>
              <div class="control">
                <input class="input" type="text" placeholder="server.jar, paper-247.jar, etc...">
              </div>
            </div>
            <div class="field column">
              <label class="label">RAM allocation</label>
              <div class="control">
                <input class="input" type="text" placeholder="4G">
              </div>
            </div>
            <div class="field column">
              <label class="label">Use GUI?</label>
              <div class="control">
                <input class="checkbox" type="checkbox">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h1 class="subtitle">Copy your start script</h1>
          <pre class="p-0 m-0">
            <code class="p-0">java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paperclip.jar nogui</code>
          </pre>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "PageMain"
}
</script>

<style scoped>

</style>