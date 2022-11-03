<template>
    <button @click="handleClick">
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
