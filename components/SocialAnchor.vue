<template>
    <div class="temp">
        <NuxtLink
            :id="`link-${data.id}`"
            :to="data.url"
            target="_blank"
            :class="`flex bg-grey mx-8 rounded-full w-social h-social tiny:w-social-tiny tiny:h-social-tiny`"
            :aria-label="data.ariaLabel"
        >
            <NuxtImg
                class="m-auto w-social-icon h-social-icon"
                :id="data.id"
                :src="data.icon"
                :alt="data.label"
                sizes="tiny:28.5px sm:38px"
                width="tiny:28.5px sm:38px"
                height="tiny:28.5px sm:38px"
            />
            <span class="sr-only">opens in a new tab</span>
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
