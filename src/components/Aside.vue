<template>
  <aside>
    <img
      alt="Dailyck logo"
      src="../assets/logo-dailup-white.png"
      class="logo"
    />

    <UsersList />

    <input
      v-if="!userStore.confirmedUsers"
      type="text"
      name="person"
      v-model="newUserName"
      @keyup.enter="addUserAndResetInput"
    />
    <br />
    <Button
      v-if="!userStore.confirmedUsers"
      type="button"
      color="blue"
      :fullWidth="true"
      @click="addUserAndResetInput"
    >
      Agregar usuario
    </Button>
    <Button
      v-if="userStore.users.length > 1 && !userStore.confirmedUsers"
      type="button"
      color="green"
      :fullWidth="true"
      @click="userStore.confirmUsers"
    >
      Confirmar usuarios
    </Button>

    <Button type="button" color="black" id="stats-button">
      Ver estadísticas
    </Button>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'
import Button from './ui/Button.vue'
import UsersList from './UsersList.vue'

const userStore = useUserStore()

const newUserName = ref('')

userStore.initActiveUser()

const addUserAndResetInput = () => {
  userStore.addUser(newUserName.value)
  newUserName.value = ''
}
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

aside {
  width: 400px;
  min-width: 400px;
  height: 100vh;
  background-color: $midnight-blue-color;
  box-shadow: 6px 0 0 rgba($violet-color, 0.4);
  color: $white-color;
  margin: 0;
  overflow-y: scroll;
  padding: 30px 12px 30px 30px;
  position: relative;
  text-align: center;

  &::-webkit-scrollbar {
    width: 18px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $light-midnight-blue-color;
    border: 6px solid $light-midnight-blue-color;
    border-radius: $border-radius-large;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: darken($midnight-blue-color, 5%);
    }
  }

  .logo {
    width: 60%;
    margin: 0 auto 10px auto;
  }

  input {
    width: 100%;
    height: 50px;
    background-color: darken($midnight-blue-color, 6%);
    border: 1px solid $border-color;
    border-radius: $border-radius-default;
    color: $white-color;
    font-size: 1em;
    padding: 0 10px;
    transition: all $transition-time-default;

    &:focus {
      border-color: lighten($border-color, 16%);
      outline: none;
    }
  }

  button {
    border-color: rgba(white, 0.4) !important;

    &:hover {
      border-color: rgba(white, 0.9) !important;
    }
  }

  button:nth-of-type(2) {
    margin-top: 3rem;
  }

  button#stats-button {
    border-color: rgba(white, 0.4) !important;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      border-color: rgba(white, 0.3) !important;
    }
  }
}
</style>
