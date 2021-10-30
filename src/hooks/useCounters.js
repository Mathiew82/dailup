import { ref } from 'vue'

export default function useCounters() {
  const start = ref(false)

  return {
    start
  }
}