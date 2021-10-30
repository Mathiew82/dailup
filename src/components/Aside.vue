<template>
  <aside>
    <PersonsList :persons="persons" />

    <input
      type="text"
      name="person"
      v-model="newPersonName"
      @keyup.enter="addPersonAndResetInput"
    />
    <br />
    <Button
      type="button"
      color="blue"
      :fullWidth="true"
      @click="addPersonAndResetInput"
    >
      Agregar persona
    </Button>
  </aside>
</template>

<script setup>
import { inject, ref } from 'vue'
import Button from './ui/Button.vue'
import PersonsList from './PersonsList.vue'

const persons = inject('persons')
const addPerson = inject('addPerson')

const newPersonName = ref('')

const addPersonAndResetInput = () => {
  addPerson(newPersonName.value)
  newPersonName.value = ''
}
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

aside {
  width: 240px;
  min-width: 240px;
  height: 100vh;
  background-color: darken($light-grey-color, 2%);
  box-shadow: 5px 0 8px darken($grey-color, 8%);
  padding: 20px;
}

input {
  width: 100%;
}
</style>
