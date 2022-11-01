<template>
  <div class="container text-center">
    <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
    <HiddenAnchor @click="scrollTo('projects')">Skip to projects</HiddenAnchor>
    <div ref="top" class="pb-32" />
    <Headshot class="mx-auto" />
    <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
    <h1 class="text-green font-bold mt-16 text-5xl tiny:text-4xl">Jacob Seiler</h1>
    <SocialLinks />
    <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
    <HiddenAnchor @click="scrollTo('footer')">Skip to footer</HiddenAnchor>
    <p class="mt-40 text-md tiny:text-sm">
      <b>I like to work hard and have fun doing it.</b> As a
      <b>software engineer</b> working for <b>Amazon</b>, and software design
      graduate from <b>Queen's University</b>, I continually look for ways to
      learn and utilize new skills.
    </p>
    <div ref="projects" />
    <ProjectCards />
    <div class="p-end">
      <p class="text-md tiny:text-sm mb-8">
        Oh, I also like scuba diving and playing guitar.
      </p>
      <div ref="footer" />
      <button class="text-green underline cursor-pointer text-md tiny:text-sm" @click="scrollTo('top')">
        Back to top
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods: {
    scrollTo (refName: string) {
      const element = this.$refs[refName] as undefined | HTMLElement
      if (element === undefined) { return }
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
    }
  }
})
</script>
