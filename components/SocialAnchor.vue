<template>
    <div class="temp">
        <NuxtLink
            :id="`link-${data.id}`"
            :to="data.url"
            target="_blank"
            :class="`flex bg-grey mx-8 rounded-full w-social h-social tiny:w-social-tiny tiny:h-social-tiny`"
            :aria-label="data.ariaLabel"
        >
            <NuxtIcon class="text-white m-auto text-xl pt-[3px]" :id="data.id" :name="data.icon" />
            <span class="sr-only">{{ data.ariaLabel }}</span>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { Social } from './SocialAnchors.vue';

defineProps<{
    data: Social;
}>();
</script>

<style scoped lang="pcss">
a {
    cursor: pointer;
    transition: transform 0.1s ease-out;

    @media (prefers-reduced-motion) {
        transition: none;
    }

    &:hover {
        transform: scale(1.2);
    }
}

#link-github:hover {
    @apply bg-github;
}

#link-linkedin:hover {
    @apply bg-linkedin;
}

#link-email:hover {
    @apply bg-green;
}

#link-phone:hover {
    @apply bg-green;
}

#linkedin {
    transform: translate(1px, -2px);
}

#phone {
    transform: translateX(0.5px) rotateZ(-15deg) scale(1.1);
}
</style>
