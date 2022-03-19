import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    timer: null,
    currentTurn: 0,
    totalTurn: 0,
    dailyStatus: 'pending'
  }),
  actions: {
    resetCurrentTurn() {
      this.currentTurn = 0
    },
    resetTotalTurn() {
      this.totalTurn = 0
    },
    incrementCurrentTurn() {
      this.currentTurn++
    },
    incrementTotalTurn() {
      this.totalTurn++
    },
    startDaily() {
      this.dailyStatus = 'started'
    },
    finishDaily() {
      this.dailyStatus = 'finished'
    }
  }
})