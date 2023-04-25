<template>
  <div class="header px-9 py-7 flex items-center justify-between">
    <div class="header__logo flex relative">
      <logo />
      <h2 class="header__text self-end font-bold text-sm text-rose absolute left-10 -bottom-2">ChatAI</h2>
    </div>
    <user-info class="user gap-3"/>
  </div>
</template>

<script>
import Logo from '@/assets/img/logo.svg'
import UserInfo from './UserInfo.vue';

  export default {
    components: {
      Logo,
      UserInfo
    },
  }
</script>

<style lang="scss" scoped>

</style>