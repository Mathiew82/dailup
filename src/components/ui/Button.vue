<template>
  <button
    :type="type"
    :class="[`button button--${color}`, { 'button--full-width': fullWidth }]"
    :id="id"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    require: false,
    default: 'button',
  },
  color: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    require: false,
    default: null,
  },
  fullWidth: {
    type: Boolean,
    require: false,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
@import '../../sass/_variables.scss';

.button {
  width: auto;
  height: 40px;
  border: none;
  border-radius: $border-radius-default;
  box-shadow: 0px 2px 4px -2px rgb(0 0 0 / 70%),
    0px 7px 13px -3px rgb(0 0 0 / 60%), inset 0px -3px 0px rgb(0 0 0 / 30%);
  font-size: 1em;
  font-weight: 600;
  margin-top: 10px;
  padding: 0 20px;
  transition: all $transition-time-default;

  &--blue {
    background: $blue-color;
    color: $black-color;

    &:hover {
      background: $light-blue-color;
    }
  }

  &--green {
    background: $green-color;
    color: $black-color;

    &:hover {
      background: $light-green-color;
    }
  }

  &--red {
    background: $red-color;
    color: $white-color;

    &:hover {
      background: $light-red-color;
    }
  }

  &--full-width {
    width: 100%;
  }
}
</style>
