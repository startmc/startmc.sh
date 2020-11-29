<template>
  <div class="layout container is-fluid p-0">
    <div class="layout-header">
      <slot name="header"></slot>
    </div>
    <div class="layout-content">
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Layout"
  }
</script>

<style scoped>
  .layout {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }

  .layout-content {
    flex: 1;
  }
</style>