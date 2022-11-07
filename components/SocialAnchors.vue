<template>
    <div class="flex justify-center">
        <SocialAnchor v-for="social in socials" :key="social.id" :data="social" />
    </div>
</template>

<script setup lang="ts">
export type Social = {
  id: string;
  label: string;
  url: string;
  color: string;
  icon: string;
};

const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/jacob-seiler',
    color: 'bg-github',
    icon: 'v1667806580/personal%20website/github.svg'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jacobseiler/',
    color: 'bg-linkedin',
    icon: 'v1667806580/personal%20website/linkedin.svg'
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:seiler.jacob1@gmail.com',
    color: 'bg-green',
    icon: 'v1667806579/personal%20website/email.svg'
  },
  {
    id: 'phone',
    label: 'Phone',
    url: 'tel:14165577215',
    color: 'bg-green',
    icon: 'v1667806581/personal%20website/phone.svg'
  }
];
</script>
