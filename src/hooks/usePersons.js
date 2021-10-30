import { ref, reactive } from 'vue'

export default function usePersons() {
  const lastId = ref(1)
  let persons = reactive([])

  const addPerson = (personName) => {
    if (personName) {
      persons.push({
        id: lastId.value++,
        name: personName,
      })
    }
  }

  const removePerson = (personId) => {
    const currentPerson = persons.find(person => person.id === personId)
    const position = persons.indexOf(currentPerson)
    persons.splice(position, 1)
  }

  return {
    persons,
    addPerson,
    removePerson,
  }
}