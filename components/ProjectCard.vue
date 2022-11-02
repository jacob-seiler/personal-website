<template>
  <div class="bg-green text-left shadow-light p-card mb-24">
    <div class="flex float-right">
      <ProjectCardAnchor :href="data.sourceURL" :icon="URLIcon.SOURCE" />
      <ProjectCardAnchor v-if="data.courseURL" :href="data.courseURL" :icon="URLIcon.COURSE" />
      <ProjectCardAnchor v-if="data.externalURL" :href="data.externalURL" :icon="URLIcon.EXTERNAL" />
    </div>
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
import { URLIcon } from './ProjectCardAnchor.vue'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    data: {
      type: Object as PropType<Project>,
      required: true
    }
  },
  data () {
    return {
      URLIcon
    }
  }
})
</script>
