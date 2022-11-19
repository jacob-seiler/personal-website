<template>
    <button type="button" aria-label="Toggle color theme" @click="theme.toggle()" id="theme-button">
        <ClientOnly>
            <template v-if="theme.mode.value === 'dark'">
                <NuxtIcon class="text-[24px] text-white" name="sun" />
            </template>
            <template v-else>
                <NuxtIcon class="text-[24px] text-black" name="moon" />
            </template>
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
