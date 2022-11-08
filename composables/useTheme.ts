const mode = ref('system' as 'light' | 'dark' | 'system');

export default function () {
    const colorMode = useColorMode();

    return {
        mode,
        toggle: () => {
            const color = colorMode.value === 'light' ? 'dark' : 'light'
            colorMode.value = color;
            mode.value = color;
        },
        addListeners: () => {
            onMounted(() => {
                const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
                const current = darkMode.matches ? 'dark' : 'light';

                colorMode.value = current;
                mode.value = current;

                darkMode.addEventListener('change', event => {
                    const color = event.matches ? "dark" : "light"
                    colorMode.value = color;
                    mode.value = color;
                });
            });
        }
    }
}
