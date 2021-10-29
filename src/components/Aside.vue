<template>
  <aside>
    <ul class="persons-list">
      <li>
        <span class="person-name">Alberto</span>
        <span class="remove-button" />
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped></style>
