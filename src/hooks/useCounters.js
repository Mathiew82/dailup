import { ref } from 'vue'

export default function useCounters() {
  const calculatingCurrentTurnTime = ref(false)
  const calculatingTotalTime = ref(false)

  return {
    calculatingCurrentTurnTime,
    calculatingTotalTime,
  }
}