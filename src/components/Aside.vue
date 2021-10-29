<template>
  <aside>
    <PersonsList />

    <input type="text" name="person" id="person-name" />
    <br /><button type="button" id="add-person">Agregar</button>
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

aside {
  width: 240px;
  height: 100vh;
  background-color: darken($light-grey-color, 2%);
  box-shadow: 5px 0 8px darken($grey-color, 8%);
  padding: 20px;
}

#person-name {
  width: 200px;
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

#add-person {
  width: 200px;
  height: 40px;
  background: $blue-color;
  border: none;
  border-radius: $border-radius-default;
  box-shadow: 0px 2px 4px rgb(45 35 66 / 50%),
    0px 7px 13px -3px rgb(45 35 66 / 40%),
    inset 0px -3px 0px rgb(58 65 111 / 60%);
  color: $white-color;
  font-size: 1em;
  font-weight: 700;
  margin-top: 10px;
  padding: 0 10px;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: 0px 4px 8px rgb(45 35 66 / 50%),
      0px 7px 13px -3px rgb(45 35 66 / 40%),
      inset 0px -3px 0px rgb(58 65 111 / 60%);
    transform: translateY(-2px);
  }
}
</style>
