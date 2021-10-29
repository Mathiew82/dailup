<template>
  <aside>
    <PersonsList />
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import PersonsList from './PersonsList.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';
</style>
