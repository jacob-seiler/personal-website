<template>
    <div :style="styles" :class="`bg-green text-left shadow-light dark:shadow-heavy p-card`">
        <div class="grid grid-cols-3 tiny:grid-cols-1">
            <div class="col-span-2">
                <p class="text-white font-bold leading-none text-xl tiny:text-lg">
                    {{ data.name }}
                </p>
                <p class="text-off-white italic text-sm tiny:text-xs">
                    {{ data.technologies.join(', ') }}
                </p>
            </div>
            <div>
                <div class="flex float-right tiny:float-left">
                    <ProjectCardAnchor :href="data.sourceURL" icon="github.svg" alt="GitHub" />
                    <ProjectCardAnchor :href="data.courseURL" icon="course.svg" alt="Course" v-if="data.courseURL" />
                    <ProjectCardAnchor :href="data.externalURL" icon="external.svg" alt="Demo" v-if="data.externalURL" />
                </div>
            </div>
        </div>
        <p class="mt-16 text-off-white leading-tight text-sm tiny:text-xs">
            <template v-for="(seg, i) in data.description.split('**')">
                <b v-if="i % 2 === 1" :key="i">{{ seg }}</b>
                <template v-else>{{ seg }}</template>
            </template>
        </p>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Project } from './ProjectCards.vue';

export default {
    props: {
        data: {
            type: Object as PropType<Project>
        }
    },
    computed: {
        styles() {
            const imgUrl = this.$img(this.data.backgroundImage);

            return {
                backgroundImage: `url('${imgUrl}')`,
                backgroundBlendMode: 'multiply',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '60%',
            }
        }
    }
}
</script>
