<template>
  <div class="app">
    <Aside />
    <Content />
  </div>
</template>

<script setup>
import Aside from './components/Aside.vue'
import Content from './components/Content.vue'
</script>

<style lang="scss">
@import './sass/main.scss';
</style>
