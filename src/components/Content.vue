<template>
  <div class="content">
    <div class="active-person-name">
      {{ nameToShow }}
    </div>

    <div class="counter counter--turn">
      <div class="counter__name">Turno actual</div>
      <div class="counter__time">00:00</div>
    </div>
    <div class="counter counter--total">
      <div class="counter__name">Tiempo daily</div>
      <div class="counter__time">00:00</div>
    </div>

    <div class="wrapper-buttons">
      <Button type="button" color="blue"> Parar tiempo </Button>
      <Button type="button" color="blue"> Terminar daily </Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Button from './ui/Button.vue'

// si no funciona la reactividad en las props probar esta otra opción
/* import { computed, toRefs } from 'vue'
const props = defineProps({
  test: String,
});
const { test } = toRefs(props); */

const { activePersonName } = defineProps({
  activePersonName: {
    type: String,
    require: false,
    default: '',
  },
})

const nameToShow = computed(() =>
  activePersonName ? activePersonName : 'Activa el turno de una persona'
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

.wrapper-buttons {
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0 auto;
}
</style>
