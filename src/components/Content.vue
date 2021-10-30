<template>
  <div class="content">
    <div class="active-person-name">
      {{ nameToShow }}
    </div>

    <Counter
      type="turn"
      header="Turno actual"
      :calculating="calculatingCurrentTurnTime"
    />
    <Counter
      type="total"
      header="Tiempo daily"
      :calculating="calculatingTotalTime"
    />

    <div class="wrapper-buttons">
      <Button type="button" color="blue"> Parar tiempo </Button>
      <Button type="button" color="blue"> Terminar daily </Button>
    </div>
  </div>
</template>

<script setup>
import { toRefs, inject, computed } from 'vue'
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

const calculatingCurrentTurnTime = inject('calculatingCurrentTurnTime')
const calculatingTotalTime = inject('calculatingTotalTime')

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
