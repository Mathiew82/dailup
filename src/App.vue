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
  padding: 20px;
}
</style>
