<template>
  <aside>
    <UsersList :users="users" />

    <input
      type="text"
      name="person"
      v-model="newUserName"
      @keyup.enter="addUserAndResetInput"
    />
    <br />
    <Button
      type="button"
      color="blue"
      :fullWidth="true"
      @click="addUserAndResetInput"
    >
      Agregar usuario
    </Button>
  </aside>
</template>

<script setup>
import { inject, ref } from 'vue'
import Button from './ui/Button.vue'
import UsersList from './UsersList.vue'

const users = inject('users')
const addUser = inject('addUser')

const newUserName = ref('')

const addUserAndResetInput = () => {
  addUser(newUserName.value)
  newUserName.value = ''
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
