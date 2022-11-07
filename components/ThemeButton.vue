<template>
    <button @click="changeColorTheme()" id="theme-button">
        <NuxtImg :src="$colorMode.value === 'light' ? 'moon.svg' : 'sun.svg'" :alt="$colorMode.value === 'light' ? 'Dark mode' : 'Light mode'" class="w-theme h-theme" />
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
