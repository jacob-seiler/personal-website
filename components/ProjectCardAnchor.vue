<template>
  <a class="ml-8" :href="href" target="_blank">
    <img class="w-card h-card tiny:w-card-tiny tiny:h-card-tiny" :src="icon.src" :alt="icon.alt">
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue/types/v3-component-props'

export const URLIcon = {
  SOURCE: { src: 'assets/github.svg', alt: 'GitHub' },
  COURSE: { src: 'assets/course.svg', alt: 'Course' },
  EXTERNAL: { src: 'assets/external.svg', alt: 'Demo' }
}

export default defineComponent({
  name: 'ProjectCardAnchor',
  props: {
    href: {
      type: String,
      required: true
    },
    icon: {
      type: Object as PropType<{src: string, alt: string}>,
      required: true
    }
  }
})
</script>
