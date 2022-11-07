<template>
    <button @click="handleClick" class="hidden-anchor fixed top-0 bg-green text-white shadow-light dark:shadow-heavy p-card font-bold text-xl tiny:text-lg z-50">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    el: HTMLInputElement | null;
}>();

const handleClick = () => {
    if (props.el === null)
        return;

    props.el.scrollIntoView({ behavior: "smooth" });
    props.el.focus({ preventScroll: true });
    props.el.blur();
}
</script>

<style scoped lang="scss">
.hidden-anchor {
    transform: translate(-50%, -200px);
	transition: transform 0.3s;

    @media (prefers-reduced-motion) {
        transition: none;
    }

    &:focus {
        transform: translate(-50%, 20px);
    }
}
</style>
