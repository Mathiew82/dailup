export const getTimeFormatted = (counter) => {
  const minutes = Math.floor(counter / 60)
  const seconds = counter - minutes * 60
  return `${addZeroToValue(minutes)}:${addZeroToValue(seconds)}`
}

const addZeroToValue = (val) => {
  return val < 10 ? `0${val}` : val
}
