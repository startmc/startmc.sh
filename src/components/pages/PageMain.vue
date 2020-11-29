<template>
  <div class="container pt-5">
    <!-- Inputs -->
      <div class="column">
        <div class="box">
          <h1 class="subtitle">Enter your server's details</h1>
          <div class="field">
            <label class="label">Server jar filename</label>
            <div class="control">
              <input class="input" type="text" placeholder="server.jar, paper-247.jar, etc...">
            </div>
          </div>
          <div class="field">
            <label class="label">RAM allocation</label>
            <div class="control">
              <input class="input" type="text" placeholder="4G">
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h1 class="subtitle">Copy your start script</h1>
          <pre class="p-0 m-0">
      <code class="p-0">
java -jar server.jar -Xmx=10G -Xms=10G
      </code>
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