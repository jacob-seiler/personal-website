<template>
    <div :style="styles" :class="`bg-green text-left shadow-light dark:shadow-heavy p-card`">
        <div class="grid grid-cols-3 tiny:grid-cols-1">
            <div class="col-span-2">
                <h2 class="text-white font-bold leading-none text-xl tiny:text-lg">
                    {{ data.name }}
                </h2>
                <p class="text-off-white italic text-sm tiny:text-xs">
                    {{ data.technologies.join(', ') }}
                </p>
            </div>
            <div>
                <div class="flex float-right tiny:float-left">
                    <ProjectCardAnchor :href="data.sourceURL" icon="github" alt="GitHub" :name="data.name" />
                    <ProjectCardAnchor :href="data.courseURL" icon="course" alt="Course" :name="data.name" v-if="data.courseURL" />
                    <ProjectCardAnchor :href="data.externalURL" icon="external" alt="Demo" :name="data.name" v-if="data.externalURL" />
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

<script setup lang="ts">
import { Project } from './ProjectCards.vue';

const props = defineProps<{
    data: Project;
}>();

const styles = computed(() => {
    const $img = useImage()
    const imgUrl = $img(props.data.backgroundImage);

    return {
        backgroundImage: `url('${imgUrl}')`,
        backgroundBlendMode: 'multiply',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '60%',
    }
});
</script>
