<template>
  <div :class="`counter counter--${type}`">
    <div class="counter__name">
      {{ header }}
    </div>
    <div class="counter__time">{{ getTimeFormatted(counter) }}</div>
  </div>
</template>

<script setup>
import { getTimeFormatted } from '@/utils/getTimeFormatted.js'

defineProps({
  type: {
    type: String,
    require: true,
  },
  counter: {
    type: Number,
    require: true,
  },
  header: {
    type: String,
    require: true,
  },
})
</script>

<style lang="scss" scoped>
@import '../sass/_variables.scss';

.counter {
  width: 100%;
  max-width: 400px;
  border-radius: $border-radius-medium;
  box-shadow: 0 6px 0 rgba($violet-color, 0.3);
  margin: 20px auto 0 auto;

  &--turn {
    background-color: $grey-color;
    color: $black-color;
  }

  &--total {
    background-color: $violet-color;
    color: $white-color;
  }

  > .counter__name {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
    padding-top: 15px;
    text-transform: uppercase;
  }

  > .counter__time {
    font-size: 70px;
    padding: 0 0 5px 0;
  }
}
</style>
