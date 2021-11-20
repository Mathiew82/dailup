<template>
  <div :class="`counter counter--${type}`">
    <div class="counter__name">
      {{ header }}
    </div>
    <div class="counter__time">{{ getTimeFormatted }}</div>
  </div>
</template>

<script setup>
import { toRefs, inject, ref, computed, watch } from 'vue'
import { counterTypes } from '../constants/counterTypes'

const props = defineProps({
  type: {
    type: String,
    require: true,
  },
  header: {
    type: String,
    require: true,
  },
})

const { type } = toRefs(props)

const start = inject('start')
const stop = inject('stop')
const activeUser = inject('activeUser')

const totalSeconds = ref(0)
const timer = ref()

const getTimeFormatted = computed(() => {
  const minutes = Math.floor(totalSeconds.value / 60)
  const seconds = totalSeconds.value - minutes * 60
  return `${addZeroToValue(minutes)}:${addZeroToValue(seconds)}`
})

const addZeroToValue = (val) => {
  return val < 10 ? `0${val}` : val
}

const startTimer = () => {
  timer.value = setInterval(() => {
    totalSeconds.value++
  }, 1000)
}

const stopTimer = () => {
  clearInterval(timer.value)
}

watch(start, (newValue) => {
  newValue && startTimer()
})

watch(stop, (newValue) => {
  newValue && stopTimer()
})

watch(activeUser, () => {
  if (type.value === counterTypes.turn) totalSeconds.value = 0
})
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

.counter {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  color: white;
  margin: 20px auto 0 auto;

  &--turn {
    background-color: rgba($green-color, 0.3);
  }

  &--total {
    background-color: $light-navy-blue-color;
  }

  > .counter__name {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    padding-top: 15px;
    text-shadow: 2px 2px 0 rgba(black, 0.5);
    text-transform: uppercase;
  }

  > .counter__time {
    font-size: 70px;
    padding: 0 0 5px 0;
    text-shadow: 2px 2px 0 rgba(black, 0.5);
  }
}
</style>
