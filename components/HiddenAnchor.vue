<template>
    <button @click="handleClick" class="hidden-anchor fixed top-0 bg-green text-white shadow-light dark:shadow-heavy p-card font-bold text-xl tiny:text-lg">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    el: HTMLInputElement;
}>();

const handleClick = () => {
    props.el.scrollIntoView({ behavior: "smooth" });
    props.el.focus({ preventScroll: true });
    props.el.blur();
}
</script>

<style scoped lang="scss">
.hidden-anchor {
    z-index: 9999;
    transform: translate(-50%, -200px);
	transition: transform 0.3s;

    &:focus {
        transform: translate(-50%, 20px);
    }
}
</style>
