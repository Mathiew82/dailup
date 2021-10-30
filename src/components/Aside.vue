<template>
  <aside>
    <PersonsList />

    <input type="text" name="person" />
    <br />
    <Button type="button" color="blue" :fullWidth="true">
      Agregar persona
    </Button>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import Button from './ui/Button.vue'
import PersonsList from './PersonsList.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

aside {
  width: 240px;
  height: 100vh;
  background-color: darken($light-grey-color, 2%);
  box-shadow: 5px 0 8px darken($grey-color, 8%);
  padding: 20px;
}

input {
  width: 100%;
}
</style>
