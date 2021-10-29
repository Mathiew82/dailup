<template>
  <aside>
    <PersonsList />

    <input type="text" name="person" id="person-name" />
    <br /><button type="button" id="add-person">Agregar persona</button>
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

#person-name {
  width: 200px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
}

#add-person {
  width: 200px;
  height: 40px;
  font-size: 16px;
  margin-top: 5px;
  padding: 0 10px;
}
</style>
