import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    currentTurn: 0,
    totalTurn: 0,
    dailyStarted: false
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
      this.dailyStarted = true
    }
  }
})