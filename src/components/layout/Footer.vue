<template>
  <footer class="footer-sticky bg-4 p-2">
    <div class="content has-text-centered">
      <h3 class="subtitle has-text-white has-text-centered footer-text"><a href="https://tadhg.sh" target="_blank">aber</a> & <a href="https://kaden.sh" target="_blank">blue</a></h3>
      <span class="footer-text"><img src="https://cdn.discordapp.com/emojis/761876733372399627.png" alt=":pog:" height="30px" width="30px"></span>
      <h6 class="footer-text subtitle has-text-white has-text-centered">Thanks to <a href="https://aikar.co/" target="_blank">Aikar</a> and his fantastic <a href="https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/" target="_blank">flags</a>.</h6>
      <h6 class="footer-text subtitle has-text-white has-text-centered">Having issues with the website? Let us know in <a href="https://chat.ksc.sh" target="_blank">my Discord's support channel</a>.</h6>
      <h6 class="footer-text subtitle has-text-white has-text-centered">Need more help? Check out the <a href="https://www.reddit.com/r/syscraft/" target="_blank">/r/syscraft</a> <a href=" https://discord.gg/Dx6SSkx" target="_blank">Discord community</a>.</h6>
      <h6 class="footer-text subtitle has-text-white has-text-centered">Does your server run <a href="https://papermc.io/" target="_blank">Paper</a>? It should.</h6>
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

.footer-text {
  margin-top: 0.3em;
  margin-bottom: 0.45em;
}

.content a {
  color: #ffcad3;
}
</style>