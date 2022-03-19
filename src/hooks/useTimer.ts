export const useTimer = (counterStore) => {
  const initTimer = () => {
    counterStore.timer = setInterval(() => {
      counterStore.incrementCurrentTurn()
      counterStore.incrementTotalTurn()
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(counterStore.timer)
    counterStore.resetCurrentTurn()
  }

  return {
    initTimer,
    stopTimer
  }
}
