<template>
  <div class="field flex text-white ml-5 w-full">
    <div class="field__chat flex-1 rounded-l-2xl bg-background-chat border-r border-border relative">
      <div class="field__input flex items-center bg-background rounded-xl py-2 px-4 absolute left-1/2 -translate-x-50% bottom-10">
        <input class="filed__input bg-background outline-none border-none w-96" type="text" placeholder="Введите текст">
        <div class="field__controls flex items-center gap-5 ml-3">
          <doc class="field__doc cursor-pointer"/>
          <img-down class="field__img cursor-pointer"/>
        </div>
        <div class="field__send bg-rose w-11 h-11 flex items-center justify-center rounded-xl ml-11 cursor-pointer">
          <send />
        </div>
      </div>
    </div>
    <div class="field__wrapper min-w-302px rounded-r-2xl bg-background-chat">
      <div class="field__inner flex items-center justify-between border-b p-4 border-border">
        <h2 class="field__title">Последние чаты</h2>
        <basket class="field__basket cursor-pointer"/>
      </div>
      <ul class="field__list flex flex-col p-4 gap-2">
        <li class="field__item flex items-center bg-background rounded-md px-3 py-3">
          <input class="field__checkbox w-4 h-4 rounded border-blue-600 border-2 bg-background-chat" type="checkbox">
          <h2 class="field__title ml-2">Не работает переменная</h2>
        </li>
        <li class="field__item flex items-center bg-background rounded-md px-3 py-3">
          <input class="field__checkbox w-4 h-4 rounded border-blue-600 border-2 bg-background-chat" type="checkbox">
          <h2 class="field__title ml-2">Не работает переменная</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Basket from '@/assets/img/basket.svg'
import Doc from '@/assets/img/doc.svg'
import ImgDown from '@/assets/img/img.svg'
import Send from '@/assets/img/send.svg'

  export default {
    components: {
      Basket,
      Doc,
      ImgDown,
      Send,
    },
  }
</script>

<style lang="scss" scoped>

</style>