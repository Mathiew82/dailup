<template>
  <div :class="`counter counter--${type}`">
    <div class="counter__name">
      {{ header }}
    </div>
    <div class="counter__time">{{ minutes }}:{{ seconds }}</div>
  </div>
  {{ calculatingCurrentTurnTime }}
  <br />
  {{ calculatingTotalTime }}
</template>

<script setup>
import { toRefs, inject, ref, watch } from 'vue'

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

const calculatingCurrentTurnTime = inject('calculatingCurrentTurnTime')
const calculatingTotalTime = inject('calculatingTotalTime')

const seconds = ref(0)
const minutes = ref(0)
const timer = ref()

const startTime = () => {
  timer.value = setInterval(() => {
    seconds.value++
  }, 1000)
}

const stopTime = () => {
  clearInterval(timer.value)
}

const manageCounterState = (val) => {
  console.log('se ejecuta el watch', val)
  val ? startTime() : stopTime()
}

if (type.value === 'turn') {
  watch(calculatingCurrentTurnTime, (newValue) => manageCounterState(newValue))
} else if (type.value === 'total') {
  watch(calculatingTotalTime, (newValue) => manageCounterState(newValue))
}
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
