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
  height: 44px;
  border: none;
  border-radius: $border-radius-default;
  border: 2px solid rgba(black, 0.4);
  font-size: 1em;
  font-weight: 600;
  margin-top: 10px;
  padding: 0 20px;

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

  &--white {
    background: darken($white-color, 10%);
    color: $black-color;

    &:hover {
      background: $white-color;
    }
  }

  &--black {
    background: lighten($black-color, 10%);
    color: $white-color;

    &:hover {
      background: $black-color;
    }
  }

  &--full-width {
    width: 100%;
  }

  &:hover {
    border-color: rgba(black, 0.9);
  }
}
</style>
