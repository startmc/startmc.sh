<template>
  <div id="app p-0 m-0">
    <Layout>
      <template v-slot:header>
        <Header></Header>
      </template>
      <template v-slot:content>
        <PageMain></PageMain>
      </template>
      <template v-slot:footer>
        <Footer></Footer>
      </template>
    </Layout>
  </div>
</template>

<script>

import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageMain from "@/components/pages/PageMain";
export default {
  name: 'App',
  components: {
    PageMain,
    Footer,
    Header,
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


.bg-1 {
  background-color: #FFCAB1;
}

.bg-2 {
  background-color: #ECDCB0;
}

.bg-3 {
  background-color: #C1D7AE;
}

.bg-4 {
  background-color: #EC4067;
}

.bg-5 {
  background-color: #A01A7D;
}
</style>
