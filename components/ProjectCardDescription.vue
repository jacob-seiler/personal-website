<template>
  <p class="text-off-white leading-tight text-sm tiny:text-xs">
    <template v-for="(seg, i) in value.split('**')">
      <b v-if="i % 2 === 1" :key="i">{{ seg }}</b>
      <!-- eslint-disable-next-line vue/mustache-interpolation-spacing vue/singleline-html-element-content-newline -->
      <template v-else>{{seg}}</template>
    </template>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    }
  }
})
</script>
