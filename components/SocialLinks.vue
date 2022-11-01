<template>
  <div id="social-links" class="flex justify-center">
    <SocialLink v-for="(social, i) in socials" :key="i" :data="social" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type Social = {
  label: string;
  url: string;
  color: string;
  icon: string
}

const socials: Social[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/jacob-seiler',
    color: 'text-github',
    icon: 'assets/github.svg'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jacobseiler/',
    color: 'text-linkedin',
    icon: 'assets/linkedin.svg'
  },
  {
    label: 'Email',
    url: '',
    color: 'text-green',
    icon: 'assets/email.svg'
  },
  {
    label: 'Phone',
    url: '',
    color: 'text-green',
    icon: 'assets/phone.svg'
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
