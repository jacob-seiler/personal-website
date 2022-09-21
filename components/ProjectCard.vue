<template>
  <div class="bg-green text-left shadow-light p-card mb-24">
    <p class="text-white font-bold leading-none text-xl tiny:text-lg">
      {{ data.name }}
    </p>
    <p class="text-off-white italic text-sm tiny:text-xs">
      {{ data.technologies.join(", ") }}
    </p>
    <p class="text-off-white leading-tight mt-16 text-sm tiny:text-sm">
      {{ data.description }}
    </p>
    <!-- text-3xl -->
    <!-- tiny:text-2xl -->
    <!-- sourceURL -->
    <!-- externalURL -->
    <!-- courseURL -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { Project } from './ProjectCards.vue'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    data: {
      type: Object as PropType<Project>,
      required: true
    }
  }
})
</script>
