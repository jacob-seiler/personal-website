<template>
    <NuxtLink
        :to="href"
        target="_blank"
        class="ml-8 tiny:ml-none tiny:mr-8 tiny:my-8 hover:opacity-70"
        :aria-label="ariaLabel"
    >
        <NuxtImg
            class="text-white w-card h-card tiny:w-card-tiny tiny:h-card-tiny"
            :src="icon"
            :alt="alt"
            sizes="tiny:28.5px sm:38px"
            width="tiny:28.5px sm:38px"
            height="tiny:28.5px sm:38px"
        />
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
