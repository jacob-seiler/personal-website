<template>
    <button type="button" aria-label="Toggle color theme" @click="theme.toggle()" id="theme-button">
        <ClientOnly>
            <NuxtImg
                class="w-theme h-theme"
                :src="theme.mode.value === 'dark' ? 'v1667806582/personal%20website/sun.svg' : 'v1667806580/personal%20website/moon.svg'"
                :alt="theme.mode.value === 'dark' ? 'Light mode' : 'Dark mode'"
                sizes="tiny:28.5px sm:38px"
            />
        </ClientOnly>
    </button>
</template>

<script setup lang="ts">
const theme = useTheme();
</script>

<style scoped lang="scss">
#theme-button {
    transition: transform 0.1s ease-out;

    @media (prefers-reduced-motion) {
        transition: none;
    }

    &:hover {
        transform: scale(1.3);
    }
}
</style>
