<template>
  <div class="content">
    <div class="active-person-name">
      {{ nameToShow }}
    </div>

    <Counter type="turn" header="Turno actual" :stop="stopedCurrentTurn" />
    <Counter type="total" header="Tiempo daily" :stop="stopedTotalTime" />

    <div class="wrapper-buttons">
      <Button type="button" color="blue" @click="stopCurrentTurn">
        Parar tiempo
      </Button>
      <Button type="button" color="blue" @click="stopTotalTime">
        Terminar daily
      </Button>
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref, computed } from 'vue'
import Button from './ui/Button.vue'
import Counter from './Counter.vue'

const props = defineProps({
  activePersonName: {
    type: String,
    require: false,
    default: '',
  },
})

const { activePersonName } = toRefs(props)

const stopedCurrentTurn = ref(false)
const stopedTotalTime = ref(false)

const stopCurrentTurn = () => {
  stopedCurrentTurn.value = true
}
const stopTotalTime = () => {
  stopedTotalTime.value = true
}

const nameToShow = computed(() =>
  activePersonName.value
    ? activePersonName.value
    : 'Activa el turno de una persona'
)
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

.content {
  flex-basis: 100%;
  padding: 20px;
  text-align: center;

  > .active-person-name {
    font-size: 50px;
    font-weight: 700;
  }
}

.wrapper-buttons {
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0 auto;
}
</style>
