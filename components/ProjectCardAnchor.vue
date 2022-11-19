<template>
    <NuxtLink
        :to="href"
        target="_blank"
        class="ml-8 tiny:ml-none tiny:mr-8 tiny:my-8 hover:opacity-70"
        :aria-label="ariaLabel"
    >
        <NuxtIcon class="text-white text-[38px] tiny:text-[28.5px]" :name="icon" />
        <span class="sr-only">{{ ariaLabel }}</span>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    href: string;
    icon: string;
    alt: string;
    name: string;
}>();

const ariaLabel = computed(() => {
    return `${props.alt}: ${props.name} (opens in a new window)`
})
</script>
