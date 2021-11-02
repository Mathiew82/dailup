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
  box-shadow: 0px 2px 4px -2px rgb(0 0 0 / 50%),
    0px 7px 13px -3px rgb(0 0 0 / 40%), inset 0px -3px 0px rgb(0 0 0 / 20%);
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

    &:hover {
      background: darken($blue-color, 4%);
    }
  }

  &--green {
    background: $green-color;
    color: $white-color;

    &:hover {
      background: darken($green-color, 4%);
    }
  }

  &--red {
    background: $red-color;
    color: $white-color;

    &:hover {
      background: darken($red-color, 4%);
    }
  }

  &--full-width {
    width: 100%;
  }
}
</style>
