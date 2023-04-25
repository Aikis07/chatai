<template>
  <div class="info bg-button rounded-xl p-3 flex flex-col gap-6">
    <user-info />
    <div class="info__inner relative">
      <refrash-rate class="info__button"/>
      <coin class="info__icon absolute -top-8 -right-1"/>
    </div>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';
import Coin from '@/assets/img/coin.svg'
import RefrashRate from './UI/RefrashRate.vue';

  export default {
    components: {
      UserInfo,
      Coin,
      RefrashRate
    },
  }
</script>

<style lang="scss" scoped>

</style>