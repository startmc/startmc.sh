<template>
  <div id="app">
    <Layout>
      <template v-slot:header>
        <h1>startmc.sh</h1>
      </template>
      <template v-slot:content>
        <p>click to gernate start.sh xXDDD</p>
      </template>
      <template v-slot:footer>
        <h1>made by aber and blue POG SO HRA POG POGPO G</h1>
      </template>
    </Layout>
  </div>
</template>

<script>

import Layout from "@/components/Layout";
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
