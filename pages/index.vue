<template>
  <div class="container text-center">
    <!-- image -->
    <Headshot />
    <h1 class="text-green font-bold mt-16 text-5xl tiny:text-4xl">
      Jacob Seiler
      <!-- For some reason it adds a space :/  -->
    </h1>
    <SocialLinks />
    <p class="mt-40 text-md tiny:text-sm">
      <b>I like to work hard and have fun doing it.</b> As a
      <b>software engineer</b> working for <b>Amazon</b>, and software design
      graduate from <b>Queen's University</b>, I continually look for ways to
      learn and utilize new skills.
    </p>
    <ProjectCards />
    <p class="text-md tiny:text-sm p-end">
      Oh, I also like scuba diving and playing guitar.
    </p>
    <!-- back to top -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
