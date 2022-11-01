<template>
  <button class="bg-green text-white p-card font-bold shadow-light text-xl" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HiddenAnchor'
})
</script>

<style scoped lang="scss">
button {
  position: fixed;
  top: -200px;
  transform: translateX(-50%);
  transition: transform 0.3s;

  &:focus {
    transform: translate(-50%, 220px);
  }
}
</style>
