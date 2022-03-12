<template>
  <div class="app">
    <Aside @confirmed-users="confirmUsers" />
    <Content :confirmedUsers="confirmedUsers" />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import Aside from './components/Aside.vue'
import Content from './components/Content.vue'
import useUsers from './hooks/useUsers'
import useCounters from './hooks/useCounters'

const { activeUser, users, addUser, removeUser, setActiveUser, setUserTime } =
  useUsers()
const { start, stop } = useCounters()

provide('activeUser', activeUser)
provide('users', users)
provide('addUser', addUser)
provide('removeUser', removeUser)
provide('setActiveUser', setActiveUser)
provide('setUserTime', setUserTime)
provide('start', start)
provide('stop', stop)

const confirmedUsers = ref(false)

const confirmUsers = () => {
  confirmedUsers.value = true
}
</script>

<style lang="scss">
@import './sass/_variables.scss';

* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;
}

body {
  background-color: $white-color;
  color: $text-color;
}

.app {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

input {
  height: 50px;
  background-color: $midnight-blue-color;
  border: 1px solid $border-color;
  border-radius: $border-radius-default;
  box-shadow: 0px 2px 4px -2px rgb(45 35 66 / 20%),
    0px 7px 13px -3px rgb(45 35 66 / 10%);
  color: $text-color;
  font-size: 1em;
  padding: 0 10px;
  transition: all $transition-time-default;

  &:focus {
    border-color: lighten($border-color, 16%);
    outline: none;
  }
}
</style>
