import { ref } from 'vue'

export default function useCounters() {
  const start = ref(false)
  const stop = ref(false)

  return {
    start,
    stop
  }
}
