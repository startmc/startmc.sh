<template>
  <div class="layout container is-fluid p-0">
    <div class="layout-header">
      <slot name="header"></slot>
    </div>
    <div class="layout-content">
      <slot name="content"></slot>
    </div>
    <div class="layout-footer">
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

.layout-header {
}

.layout-content {
  flex: 1;
}

.layout-footer {
  flex: 0;
  padding: 0;
  min-height: 16em;
}
</style>