<template>
  <button class="" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HiddenAnchor'
})
</script>
