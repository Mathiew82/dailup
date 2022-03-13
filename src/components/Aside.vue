<template>
  <aside>
    <img
      alt="Dailyck logo"
      src="../assets/logo-dailup-white.png"
      class="logo"
    />

    <UsersList :users="users" :confirmedUsers="confirmedUsers" />

    <input
      v-if="!confirmedUsers"
      type="text"
      name="person"
      v-model="newUserName"
      @keyup.enter="addUserAndResetInput"
    />
    <br />
    <Button
      v-if="!confirmedUsers"
      type="button"
      color="blue"
      :fullWidth="true"
      @click="addUserAndResetInput"
    >
      Agregar usuario
    </Button>
    <Button
      v-if="users.length > 1 && !confirmedUsers"
      type="button"
      color="green"
      :fullWidth="true"
      @click="confirmUsers"
    >
      Confirmar usuarios
    </Button>
  </aside>
</template>

<script setup>
import { getCurrentInstance, inject, ref } from 'vue'
import Button from './ui/Button.vue'
import UsersList from './UsersList.vue'

const { emit } = getCurrentInstance()

const users = inject('users')
const addUser = inject('addUser')

const newUserName = ref('')
const confirmedUsers = ref(false)

const addUserAndResetInput = () => {
  addUser(newUserName.value)
  newUserName.value = ''
}

const confirmUsers = () => {
  confirmedUsers.value = true
  emit('confirmed-users')
}
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

aside {
  width: 350px;
  min-width: 350px;
  height: 100vh;
  background-color: $midnight-blue-color;
  box-shadow: 6px 0 0 rgba($violet-color, 0.4);
  color: $white-color;
  margin: 0;
  overflow-y: scroll;
  padding: 30px 12px 30px 30px;
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
}
</style>
