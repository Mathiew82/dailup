<template>
  <div v-if="confirmedUsers" class="content">
    <div class="active-user-name">
      {{ userStore.activeUser.name }}
    </div>

    <Counter :type="counterTypes.turn" header="Turno actual" />
    <Counter :type="counterTypes.total" header="Tiempo daily" />

    <div class="wrapper-buttons">
      <Button type="button" color="green"> Terminar daily </Button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user.js'
import Button from './ui/Button.vue'
import Counter from './Counter.vue'
import { counterTypes } from '../constants/counterTypes'

const userStore = useUserStore()

defineProps({
  confirmedUsers: {
    type: Boolean,
    require: true,
  },
})
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
  background-color: $white-color;
  margin: 3vh 3vh 0 3vh;
  padding: 20px;
  text-align: center;
  animation: fadeIn 2s;

  > .active-user-name {
    color: $midnight-blue-color;
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
