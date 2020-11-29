<template>
  <footer class="footer-sticky bg-4 p-2">
    <div class="content has-text-centered">
      <h3 class="subtitle has-text-white has-text-centered"><a href="https://tadhg.sh" target="_blank">aber</a> & <a href="https://kaden.sh" target="_blank">blue</a></h3>
      <span><img src="https://cdn.discordapp.com/emojis/761876733372399627.png" alt=":pog:" height="30px" width="30px"></span>
      <h6 class="subtitle has-text-white has-text-centered">Thanks to <a href="https://aikar.co/">Aikar</a> and his fantastic <a href="https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/">flags</a></h6>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
.footer-sticky {
  position: sticky;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.content a {
  color: #ffcad3;
}
</style>