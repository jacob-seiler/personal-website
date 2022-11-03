<template>
    <div class="container text-center">
        <div ref="top" class="pb-32"></div>
        <Headshot class="mx-auto" />
        <h1 class="text-green font-bold mt-16 text-5xl tiny:text-4xl">Jacob Seiler</h1>
        <SocialAnchors />
        <p class="mt-40 text-md tiny:text-sm mx-24 dark:text-white">
            <b>I like to work hard and have fun doing it.</b> As a
            <b>software engineer</b> working for <b>Amazon</b>, and software design
            graduate from <b>Queen's University</b>, I continually look for ways to
            <b>learn and apply</b> new <b>skills and technologies</b>.
        </p>
        <ProjectCards class="mt-64" />
        <div class="p-end">
            <p class="dark:text-white text-md tiny:text-sm mb-8">
                Oh, I also like scuba diving and playing guitar.
            </p>
            <button class="text-green underline cursor-pointer text-md tiny:text-sm" @click="scrollTo(top)">
                Back to top
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const top = ref<HTMLInputElement | null>(null);

const scrollTo = (ref: HTMLInputElement) => {
    ref.scrollIntoView({ behavior: "smooth" });
}
</script>