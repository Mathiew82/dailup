import { ref } from 'vue'
import { useCounterStore } from '../stores/counter.js'

export const useTimer = () => {
  const counterStore = useCounterStore()
  const timer = ref(null)

  const initTimer = () => {
    timer.value = setInterval(() => {
      counterStore.incrementCurrentTurn()
      counterStore.incrementTotalTurn()
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timer.value)
  }

  return {
    initTimer,
    stopTimer
  }
}
