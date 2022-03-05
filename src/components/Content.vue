<template>
  <div v-if="confirmedUsers" class="content">
    <div class="active-user-name">
      {{ activeUser.name }}
    </div>

    <Counter :type="counterTypes.turn" header="Turno actual" />
    <Counter :type="counterTypes.total" header="Tiempo daily" />

    <div class="wrapper-buttons">
      <Button type="button" color="green"> Terminar daily </Button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import Button from './ui/Button.vue'
import Counter from './Counter.vue'
import { counterTypes } from '../constants/counterTypes'

const props = defineProps({
  confirmedUsers: {
    type: Boolean,
    require: true,
  },
})

const activeUser = inject('activeUser')
const stop = inject('stop')

const stopTimer = () => {
  stop.value = true
}
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.content {
  flex-basis: 100%;
  height: 94vh;
  background-color: $light-navy-blue-color;
  border-radius: $border-radius-large;
  box-shadow: 0 8px 32px rgb(0 0 0 / 60%);
  margin: 3vh 3vh 0 3vh;
  padding: 20px;
  text-align: center;
  animation: fadeIn 2s;

  > .active-user-name {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
  }
}

.wrapper-buttons {
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0 auto;
}
</style>
