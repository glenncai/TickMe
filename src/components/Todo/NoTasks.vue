<template>
  <div
    class="no-tasks"
  >
    <v-icon
      size="100"
      color="primary"
    >
      mdi-sticker-check-outline
    </v-icon>
    <div class="text-h4 primary--text">No tasks</div>
  </div>
</template>

<script>
export default {
  name: 'NoTasks'
}
</script>

<style lang="scss" scoped>
.no-tasks {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: .6;
}
</style>