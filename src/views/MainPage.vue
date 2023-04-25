<template>
  <div class="main bg-background h-screen">
    <main-header />
    <div class="main px-5 flex justify-between">
      <main-controls />
      <main-field />
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainControls from '@/components/MainControls.vue'
import MainField from '@/components/MainField.vue';

  export default {
    components: {
      MainHeader,
      MainControls,
      MainField
    },
  }
</script>

<style lang="scss" scoped>

</style>