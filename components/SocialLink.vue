<template>
  <p :class="`${data.color} p-none`">
    {{ data.label }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { Social } from './SocialLinks.vue'

export default defineComponent({
  name: 'SocialLink',
  props: {
    data: {
      type: Object as PropType<Social>,
      required: true
    }
  }
})
</script>
