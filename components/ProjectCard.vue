<template>
  <div class="card bg-green">
    <p class="text-white">
      {{ data.name }}
    </p>
    <p class="text-off-white italic">
      {{ data.technologies.join(", ") }}
    </p>
    <p class="text-off-white">
      {{ data.description }}
    </p>
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
