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
  box-shadow: 0px 2px 4px rgb(0 0 0 / 50%), 0px 7px 13px -3px rgb(0 0 0 / 40%),
    inset 0px -3px 0px rgb(0 0 0 / 30%);
  font-size: 1em;
  font-weight: 700;
  margin-top: 10px;
  padding: 0 20px;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow $transition-time-default ease,
    transform $transition-time-default ease;

  &--blue {
    background: $blue-color;
    color: $white-color;
  }

  &--green {
    background: $green-color;
    color: $white-color;
  }

  &--red {
    background: $red-color;
    color: $white-color;
  }

  &--full-width {
    width: 100%;
  }

  &:hover {
    box-shadow: 0px 4px 8px rgb(0 0 0 / 50%), 0px 7px 13px -3px rgb(0 0 0 / 40%),
      inset 0px -3px 0px rgb(0 0 0 / 30%);
    transform: translateY(-2px);
  }
}
</style>
