import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    lastId: 0,
    activeUser: null,
    users: [],
    confirmedUsers: false
  }),
  actions: {
    incrementLastId() {
      this.lastId++
    },
    initActiveUser() {
      this.activeUser = {
        id: 0,
        name: 'Activa el turno de un usuario'
      }
    },
    resetActiveUser() {
      this.activeUser = {
        id: 0,
        name: 'Se acabó la daily!'
      }
    },
    addUser(userName) {
      if (userName) {
        this.incrementLastId()

        this.users.push({
          id: this.lastId,
          name: userName,
          time: 0
        })
      }
    },
    removeUser(userId) {
      const currentUser = this.users.find(user => user.id === userId)
      const position = this.users.indexOf(currentUser)
      this.users.splice(position, 1)
    },
    setActiveUser(user) {
      this.activeUser.id = user.id
      this.activeUser.name = user.name
    },
    setUserTime(userId, time) {
      const currentUser = this.users.find(user => user.id === userId)
      currentUser.time = time
    },
    confirmUsers() {
      this.confirmedUsers = true
    }
  },
})
