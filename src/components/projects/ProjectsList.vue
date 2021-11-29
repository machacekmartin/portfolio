<template>
    <ul class="projects-list">
        <projects-list-item
            v-for="project in projects"
            :key="project"
            :type="project.type"
            :name="project.name"
            :text="project.text"
            :technologies="project.technologies"
            :image="project.image"
        ></projects-list-item>
    </ul>
</template>

<script>
import ProjectsListItem from "./ProjectsListItem.vue";
export default {
    components: {
        "projects-list-item": ProjectsListItem,
    },
    data() {
        return {
            projects: [
                {
                    type: "Web app",
                    name: "Residence Pisecnice",
                    text: `Rezidence Písečnice, Hi, my name is Martin, 
                            I’m from Czech Republic and I focus on Frontend 
                            Dev & Apps in general  and I focus`,
                    technologies: ["Vue.js", "SASS", "HTML5", "ES6+"],
                    image: "webp/pisecnice.webp",
                },
                {
                    type: "Admin web app, hybrid mobile app, api",
                    name: "Our Zoo",
                    text: `Rezidence Písečnice, Hi, my name is Martin, 
                            I’m from Czech Republic and I focus on Frontend 
                            Dev & Apps in general  and I focus`,
                    technologies: ["Vue.js", "SASS", "HTML5", "ES6+"],
                    image: "webp/zoo.webp",
                },
                {
                    type: "Web app",
                    name: "Atelier Horizont",
                    text: `Rezidence Písečnice, Hi, my name is Martin, 
                            I’m from Czech Republic and I focus on Frontend 
                            Dev & Apps in general  and I focus`,
                    technologies: ["Vue.js", "SASS", "HTML5", "ES6+"],
                    image: "webp/atelier.webp",
                },
            ],
        };
    },
};
</script>

<style>
</style>