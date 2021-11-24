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
                    image: "https://winningestate.cz/wp-content/uploads/2020/06/06c_maura_popuvky.jpg",
                },
                {
                    type: "Web app",
                    name: "Atelier Horizont",
                    text: `Rezidence Písečnice, Hi, my name is Martin, 
                            I’m from Czech Republic and I focus on Frontend 
                            Dev & Apps in general  and I focus`,
                    technologies: ["Vue.js", "SASS", "HTML5", "ES6+"],
                    image: "https://www.atelierhorizont.com/storage/images/c16a1b4df2f4aa0800bb5efefbb7f0a7-2021-02-02-102640.jpg",
                },
            ],
        };
    },
};
</script>

<style>
</style>