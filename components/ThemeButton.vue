<template>
    <button @click="changeColorTheme()" id="theme-button">
        <NuxtImg
            class="w-theme h-theme"
            :src="$colorMode.value === 'light' ? 'v1667806580/personal%20website/moon.svg' : 'v1667806582/personal%20website/sun.svg'"
            :alt="$colorMode.value === 'light' ? 'Dark mode' : 'Light mode'"
            sizes="tiny:28.5px sm:38px"
        />
    </button>
</template>

<script setup lang="ts">
const changeColorTheme = (color?: 'light' | 'dark' | 'system') => {
    if (color) {
        useColorMode().value = color;
        return;
    }

    useColorMode().value = useColorMode().value === 'dark' ? 'light' : 'dark';
}

changeColorTheme('system');

onMounted(() => {
    // System color mode change listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const color = event.matches ? "dark" : "light";
        changeColorTheme(color);
    });
})
</script>

<style scoped lang="scss">
#theme-button {
    transition: transform 0.1s ease-out;

    &:hover {
        transform: scale(1.3);
    }
}
</style>
