import { ref, reactive } from 'vue'

export default function useUsers() {
  const lastId = ref(1)
  let activeUser = reactive({
    id: 0,
    name: 'Activa el turno de un usuario'
  })
  let users = reactive([])

  const addUser = (userName) => {
    if (userName) {
      users.push({
        id: lastId.value++,
        name: userName,
        time: 0
      })
    }
  }

  const removeUser = (userId) => {
    const currentUser = users.find(user => user.id === userId)
    const position = users.indexOf(currentUser)
    users.splice(position, 1)
  }

  const setActiveUser = (user) => {
    activeUser.id = user.id
    activeUser.name = user.name
  }

  const setUserTime = (userId, time) => {
    const currentUser = users.find(user => user.id === userId)
    currentUser.time = time
  }

  return {
    activeUser,
    users,
    addUser,
    removeUser,
    setActiveUser,
    setUserTime,
  }
}
