<template>
    <NuxtLink :to="href" target="_blank" class="ml-8 tiny:ml-none tiny:mr-8 tiny:my-8 hover:opacity-70">
        <NuxtImg
            class="text-white w-card h-card tiny:w-card-tiny tiny:h-card-tiny"
            :src="icon"
            :alt="alt"
            sizes="tiny:28.5px sm:38px"
            :aria-label="`${alt}: ${name} (opens in a new window)`"
        />
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    href: string;
    icon: string;
    alt: string;
    name: string;
}>();
</script>
