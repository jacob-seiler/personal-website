<template>
  <div>
    <div v-for="(project, i) in projects" :key="i">
      <ProjectCard :data="project" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type Project = {
    name: string,
    technologies: string[],
    description: string,
    // backgroundImage: ?,
    sourceURL: string,
    externalURL?: string,
    courseURL?: string
}

const projects: Project[] = [
  {
    name: 'CSS Designer',
    technologies: ['React', 'TypeScript', 'Bootstrap', 'Sass'],
    description: 'Web application for designing and styling CSS components using interactive tools. Developed with React JS and Bootstrap frameworks using TypeScript and Sass.',
    sourceURL: 'https://github.com/jacob-seiler/css-toolkit',
    externalURL: 'https://jacob-seiler.github.io/CSS-Toolkit/build/components/boxshadow.html'
  },
  {
    name: 'Ticket Website',
    technologies: ['Flask', 'PyTest', 'Selenium'],
    description: 'Course project for Software Quality Assurance CISC 327. Developed ticket buying and selling web application using Flask. Performed white and black box testing using Selenium and PyTest.',
    sourceURL: 'https://github.com/jacob-seiler/seetgeek',
    courseURL: 'http://www2.cs.queensu.ca/undergrad/courses/profile.php?id=CISC-327'
  }
]

export default Vue.extend({
  name: 'ProjectCards',
  data () {
    return {
      projects
    }
  }
})
</script>
