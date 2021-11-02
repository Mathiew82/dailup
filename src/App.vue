<template>
  <div class="app">
    <Aside />
    <Content />
  </div>
</template>

<script setup>
import { provide } from 'vue'
import Aside from './components/Aside.vue'
import Content from './components/Content.vue'
import usePersons from './hooks/usePersons'
import useCounters from './hooks/useCounters'

const {
  activePerson,
  persons,
  addPerson,
  removePerson,
  setActivePerson,
  setPersonTime,
} = usePersons()
const { start, stop } = useCounters()

provide('activePerson', activePerson)
provide('persons', persons)
provide('addPerson', addPerson)
provide('removePerson', removePerson)
provide('setActivePerson', setActivePerson)
provide('setPersonTime', setPersonTime)
provide('start', start)
provide('stop', stop)
</script>

<style lang="scss">
@import './sass/_variables.scss';

* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background-color: $light-grey-color;
}

.app {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

input {
  height: 40px;
  background-color: $white-color;
  border: none;
  border-radius: $border-radius-default;
  box-shadow: 0px 2px 4px rgb(45 35 66 / 20%),
    0px 7px 13px -3px rgb(45 35 66 / 10%);
  font-size: 1em;
  padding: 0 10px;

  &:focus {
    border: 2px solid $border-color;
    box-shadow: none;
    outline: none;
  }
}
</style>
