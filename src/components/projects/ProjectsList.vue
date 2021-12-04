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
                    text: `[IN DEV] Presentation website for real estate development.`,
                    technologies: ["Vue.js", "Typescript", "Vuex", "Tailwind CSS", "Firebase"],
                    image: "webp/pisecnice.webp",
                },
                {
                    type: "Admin web app, hybrid mobile app, REST api",
                    name: "Our Zoo",
                    text: `Unifying Zoo system with web administration panel for employees and hybrid mobile application for zoo visitors. Currently private, contact me for access :)`,
                    technologies: ["Lumen", "Stateless Rest API", "Vue.js", "Vuex",  "SASS", "MongoDB", "Cordova", "Leaflet & Mapbox", ],
                    image: "webp/zoo.webp",
                },
                {
                    type: "Web app with admin panel",
                    name: "Atelier Horizont",
                    text: `Website for architecture company. Offers customizable content, projects with galleries, news and articles..`,
                    technologies: ["Laravel", "SASS", "HTML5", "MySQL"],
                    image: "webp/atelier.webp",
                },
            ],
        };
    },
};
</script>