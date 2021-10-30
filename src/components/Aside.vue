<template>
  <aside>
    <PersonsList :persons="persons" @remove-person="removePerson" />

    <input
      type="text"
      name="person"
      v-model="newPersonName"
      @keyup.enter="addPerson"
    />
    <br />
    <Button type="button" color="blue" :fullWidth="true" @click="addPerson">
      Agregar persona
    </Button>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import Button from './ui/Button.vue'
import PersonsList from './PersonsList.vue'

const persons = ref([])
const newPersonName = ref('')
const lastId = ref(1)

const addPerson = () => {
  persons.value.push({
    id: lastId.value++,
    name: newPersonName.value,
  })
}

const removePerson = (personId) => {
  persons.value = persons.value.filter((person) => person.id !== personId)
}
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
