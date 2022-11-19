<template>
    <div class="flex justify-center">
        <SocialAnchor v-for="social in socials" :key="social.id" :data="social" />
    </div>
</template>

<script setup lang="ts">
export type Social = {
  id: string;
  label: string;
  ariaLabel: string;
  url: string;
  color: string;
  icon: string;
};

const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    ariaLabel: "My GitHub (opens in a new window)",
    url: 'https://github.com/jacob-seiler',
    color: 'bg-github',
    icon: 'github'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    ariaLabel: "My LinkedIn (opens in a new window)",
    url: 'https://www.linkedin.com/in/jacobseiler/',
    color: 'bg-linkedin',
    icon: 'linkedin'
  },
  {
    id: 'email',
    label: 'Email',
    ariaLabel: "My Email (opens email)",
    url: 'mailto:seiler.jacob1@gmail.com',
    color: 'bg-green',
    icon: 'email'
  },
  {
    id: 'phone',
    label: 'Phone',
    ariaLabel: "My Phone (opens phone)",
    url: 'tel:14165577215',
    color: 'bg-green',
    icon: 'phone'
  }
];
</script>
