<template>
  <div class="content">
    <div class="active-person-name">
      {{ activePersonName }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  activePersonName: {
    type: String,
    require: false,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.content {
  flex-basis: 100%;
  padding: 20px;
  text-align: center;

  > .active-person-name {
    font-size: 50px;
    font-weight: 700;
  }
}
</style>
