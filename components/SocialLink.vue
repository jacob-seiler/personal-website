<template>
  <a :class="`flex bg-grey hover:${data.color} mx-8 rounded-full h-social w-social tiny:h-social-tiny tiny:w-headshot-tiny`" :href="data.url" target="_blank">
    <img class="m-auto invert-0" :src="data.icon" :alt="data.label">
  </a>
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

<style scoped lang="scss">
a {
  transition: transform 0.1s ease-out;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
