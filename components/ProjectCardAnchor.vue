<template>
    <NuxtLink :to="href" target="_blank" class="ml-8 tiny:ml-none tiny:mr-8 tiny:my-8 hover:opacity-70">
        <NuxtImg :src="icon" :alt="alt" class="text-white w-card h-card tiny:w-card-tiny tiny:h-card-tiny" />
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    href: string;
    icon: string;
    alt: string;
}>();
</script>
