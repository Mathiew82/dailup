<template>
  <aside>
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
    <br /><br />
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
  width: 240px;
  min-width: 240px;
  height: 100vh;
  background-color: darken($light-grey-color, 2%);
  box-shadow: 5px 0 8px darken($grey-color, 8%);
  padding: 20px;
}

input {
  width: 100%;
}
</style>
