import { ref, reactive } from 'vue'

export default function usePersons() {
  const lastId = ref(1)
  let activePerson = reactive({
    id: 0,
    name: 'Activa el turno de una persona',
    time: 0,
    finished: false
  })
  let persons = reactive([])

  const addPerson = (personName) => {
    if (personName) {
      persons.push({
        id: lastId.value++,
        name: personName,
        time: 0,
        finished: false
      })
    }
  }

  const removePerson = (personId) => {
    const currentPerson = persons.find(person => person.id === personId)
    const position = persons.indexOf(currentPerson)
    persons.splice(position, 1)
  }

  const setActivePerson = (person) => {
    activePerson.id = person.id
    activePerson.name = person.name
  }

  const setActivePersonAsFinished = () => {
    activePerson.finished = true
  }

  return {
    activePerson,
    persons,
    addPerson,
    removePerson,
    setActivePerson,
    setActivePersonAsFinished,
  }
}