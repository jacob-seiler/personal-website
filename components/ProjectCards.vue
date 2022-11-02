<template>
  <div>
    <div v-for="(project, i) in projects" :key="i">
      <ProjectCard class="mb-24" :data="project" />
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
    description: '**Web application** for designing and styling **CSS components** using interactive tools. Developed with **React JS** and **Bootstrap** frameworks using **TypeScript** and **Sass**.',
    sourceURL: 'https://github.com/jacob-seiler/css-toolkit',
    externalURL: 'https://jacob-seiler.github.io/CSS-Toolkit/build/components/boxshadow.html'
  },
  {
    name: 'Ticket Website',
    technologies: ['Flask', 'PyTest', 'Selenium'],
    description: 'Course project for **Software Quality Assurance** (CISC 327). Developed ticket buying and selling **web application** using **Flask**. Performed **white and black box testing** using **Selenium** and **PyTest**.',
    sourceURL: 'https://github.com/jacob-seiler/seetgeek',
    courseURL: 'http://www2.cs.queensu.ca/undergrad/courses/profile.php?id=CISC-327'
  },
  {
    name: 'Personal Website',
    technologies: ['NuxtJS', 'TypeScript', 'TailwindCSS', 'Jest'],
    description: 'The same website you are on right now! A space for me to showcase my **projects** and ways to **connect** with me. This website was built using **NuxtJS** with **TypeScript**, and **TailwindCSS**.',
    sourceURL: 'https://github.com/jacob-seiler/personal-website',
    externalURL: 'https://jacobseiler.com'
  },
  {
    name: 'Fashion Classifier',
    technologies: ['Keras', 'NumPy'],
    description: '**Winner** of the **2020 Camp QMIND hackathon**. **Over 200 participants** each tasked with creating an **Artificial Intelligence** to classify fashion items. Used **NumPy** and **Keras** to preprocess images and build a **CNN model**. Final model had an accuracy of **91.95%**.',
    sourceURL: 'https://github.com/jacob-seiler/CampQMINDTeamB20'
  },
  {
    name: 'Lyric Generation A.I.',
    technologies: ['Keras', 'NumPy', 'Pandas'],
    description: '**Artificial Intelligence** that generates lyrics based on genres using lyric data from the **Genius API**. Song\'s genre can be predicted with **62.99%** accuracy and lyrics can be generated with **73.93%** accuracy.',
    sourceURL: 'https://github.com/QMIND-Team/Lyric-Gen'
  },
  {
    name: 'Stock Prediction A.I.',
    technologies: ['Keras', 'NumPy', 'Pandas'],
    description: '**Artificial Intelligence** that predicts stock market closing prices with an accuracy of **60.53%**. Model is an ensemble **LSTM** built using **Keras**. Stock data obtained from **Yahoo! Finance**.',
    sourceURL: 'https://github.com/BetaLab-Queens/quant'
  },
  {
    name: '2D Game Engine',
    technologies: ['Java'],
    description: '**Game engine** designed to make creating 2D Java games simple. Engine manages **resolution scaling**, **delta timing**, **double buffer rendering**, and provides an intuitive **API** to get started.',
    sourceURL: 'https://github.com/jacob-seiler/Java-2D-Game-Engine'
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
