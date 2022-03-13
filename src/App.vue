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
@import './sass/main.scss';
</style>
