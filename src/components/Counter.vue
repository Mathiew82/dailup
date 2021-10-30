<template>
  <div :class="`counter counter--${type}`">
    <div class="counter__name">
      {{ header }}
    </div>
    <div class="counter__time">{{ getTimeFormatted }}</div>
  </div>
</template>

<script setup>
import { toRefs, ref, computed, watch } from 'vue'

const props = defineProps({
  type: {
    type: String,
    require: true,
  },
  header: {
    type: String,
    require: true,
  },
  calculating: {
    type: Boolean,
    require: true,
  },
})

const { calculating } = toRefs(props)

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

const startTime = () => {
  timer.value = setInterval(() => {
    totalSeconds.value++
  }, 1000)
}

const stopTime = () => {
  clearInterval(timer.value)
}

const manageCounterState = (val) => {
  val ? startTime() : stopTime()
}

watch(calculating, (newValue) => manageCounterState(newValue))
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
    background-color: #498;
  }

  &--total {
    background-color: darken($dark-grey-color, 25%);
  }

  > .counter__name {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 3px;
    padding-top: 10px;
    text-transform: uppercase;
  }

  > .counter__time {
    font-size: 80px;
    padding: 0 0 5px 0;
    text-shadow: 0 4px 0 rgba(black, 0.3);
  }
}
</style>
