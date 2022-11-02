<template>
  <div id="card" :class="`bg-green ${data.backgroundImage} text-left shadow-light p-card`">
    <div class="grid grid-cols-3 tiny:grid-cols-1">
      <div class="col-span-2">
        <p class="text-white font-bold leading-none text-xl tiny:text-lg">
          {{ data.name }}
        </p>
        <p class="text-off-white italic text-sm tiny:text-xs">
          {{ data.technologies.join(", ") }}
        </p>
      </div>
      <div>
        <div class="flex float-right tiny:float-left">
          <ProjectCardAnchor :href="data.sourceURL" :icon="URLIcon.SOURCE" />
          <ProjectCardAnchor v-if="data.courseURL" :href="data.courseURL" :icon="URLIcon.COURSE" />
          <ProjectCardAnchor v-if="data.externalURL" :href="data.externalURL" :icon="URLIcon.EXTERNAL" />
        </div>
      </div>
    </div>
    <ProjectCardDescription class="mt-16" :value="data.description" />
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

<style scoped lang="scss">
#card {
  background-blend-mode: multiply;
  background-position: right;
  background-repeat: no-repeat;
  background-size: 60%;

  @screen tiny {
    background-size: contain;
    background-position: center;
  }
}
</style>
