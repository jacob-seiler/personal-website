<template>
  <div class="dark:bg-dark">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const theme = useTheme();

theme.addListeners();
</script>