<template>
  <div id="social-links" class="flex justify-center">
    <SocialAnchor v-for="social in socials" :key="social.id" :data="social" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type Social = {
  id: string;
  label: string;
  url: string;
  color: string;
  icon: string;
}

const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/jacob-seiler',
    color: 'bg-github',
    icon: 'assets/github.svg'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jacobseiler/',
    color: 'bg-linkedin',
    icon: 'assets/linkedin.svg'
  },
  {
    id: 'email',
    label: 'Email',
    url: '',
    color: 'bg-green',
    icon: 'assets/email.svg'
  },
  {
    id: 'phone',
    label: 'Phone',
    url: '',
    color: 'bg-green',
    icon: 'assets/phone.svg'
  }
]

export default Vue.extend({
  name: 'SocialAnchors',
  data () {
    return {
      socials
    }
  }
})
</script>
