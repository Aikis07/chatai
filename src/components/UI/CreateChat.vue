<template>
  <div class="button bg-blue-button p-3 rounded-xl flex items-center gap-3 cursor-pointer">
    <plus />
    <h2 class="button__text">Создать новый чат</h2>
  </div>
</template>

<script>
import Plus from '@/assets/img/plus.svg'

  export default {
    components: {
      Plus,
    },
  }
</script>

<style lang="scss" scoped>

</style>