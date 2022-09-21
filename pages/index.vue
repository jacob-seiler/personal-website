<template>
  <div class="container">
    <!-- image -->
    <img alt="Headshot">
    <h1 class="text-green font-bold">
      Jacob Seiler
    </h1>
    <SocialLinks />
    <p>
      <b>I like to work hard and have fun doing it.</b> As a
      <b>software engineer</b> working for <b>Amazon</b>, and software design
      graduate from <b>Queen's University</b>, I continually look for ways to
      learn and utilize new skills.
    </p>
    <ProjectCards />
    <p id="bottom">
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
