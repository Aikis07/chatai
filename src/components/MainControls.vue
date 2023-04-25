<template>
  <div class="controls text-white min-w-281px mt-9 flex-col">
    <div class="controls__wrapper flex flex-col gap-5">
      <div class="create flex items-center gap-4 bg-button px-4 py-3 rounded-xl cursor-pointer">
        <chat class="chat fill-blue-400" />
        <h2 class="create__text">Создать чат</h2>
      </div>
      <div class="chats flex items-center gap-4 bg-button px-4 py-3 rounded-xl cursor-pointer">
        <chat class="chat fill-rose" />
        <h2 class="chat__text">Мои чаты</h2>
      </div>
    </div>
    <div class="controls__history mt-12">
      <h2 class="controls__title">История запросов</h2>
      <ul class="controls__list flex flex-col gap-3 my-3">
        <li class="controls__item cursor-pointer bg-button px-3 py-4 rounded-md">Не работает переменная</li>
        <li class="controls__item cursor-pointer bg-button px-3 py-4 rounded-md">Не работает переменная</li>
      </ul>
      <create-chat />
    </div>
    <user-block class="user mt-72"/>
  </div>
</template>

<script>
import Chat from '@/assets/img/chat.svg'
import CreateChat from './UI/CreateChat.vue';
import UserBlock from './UserBlock.vue';


export default {
  components: {
    Chat,
    CreateChat,
    UserBlock,
  },
}
</script>

<style lang="scss" scoped></style>