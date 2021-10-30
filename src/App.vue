<script setup>
import Aside from './components/Aside.vue'
</script>

<template>
  <Aside msg="Hello Vue 3 + Vite" />
</template>

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
