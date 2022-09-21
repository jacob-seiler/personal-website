<template>
  <div id="social-links">
    <SocialLink v-for="(social, i) in socials" :key="i" :data="social" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type Social = {
  label: string;
  url: string;
  color: string;
  // icon: string
}

const socials: Social[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/jacob-seiler',
    color: 'text-github'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jacobseiler/',
    color: 'text-linkedin'
  },
  {
    label: 'Email',
    url: '',
    color: 'text-green'
  },
  {
    label: 'Phone',
    url: '',
    color: 'text-green'
  }
]

export default Vue.extend({
  name: 'SocialLinks',
  data () {
    return {
      socials
    }
  }
})
</script>
