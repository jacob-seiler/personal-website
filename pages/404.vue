<template>
    <main class="container mt-32 text-center">
        <h1 class="font-bold text-5xl tiny:text-4xl">Hmm... You seem lost.</h1>
        <p class="mt-16 text-md tiny:text-sm">Not really sure how that happened since there's only one page. But, you can click <NuxtLink to="/" aria-label="right here" class="text-green underline cursor-pointer font-bold">right here</NuxtLink> to get back.</p>
        <p class="mt-16">{{data.fact}}</p>
    </main>
</template>

<script setup>
const { data } = await useFetch('https://catfact.ninja/fact');
</script>