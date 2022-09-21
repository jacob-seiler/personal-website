<template>
  <nuxt-img class="p-none mt-30 w-headshot tiny:w-headshot-tiny" alt="Headshot" src="assets/headshot.png" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeadshotPhoto'
})
</script>

<style lang="postcss" scoped>
    img {
        @apply rounded-full;
    }
</style>
