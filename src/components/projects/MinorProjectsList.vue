<template>
    <ul class="minor-projects-list">
        <minor-projects-list-item
            v-for="minorProject in minorProjects"
            :key="minorProject.name"
            :image="minorProject.image"
            :name="minorProject.name"
            :description="minorProject.description"
            :link="minorProject.link"
        ></minor-projects-list-item>
    </ul>
</template>

<script>
import MinorProjectsListItem from './MinorProjectsListItem.vue'
export default {
    components: {
        MinorProjectsListItem
    },
    data() {
        return {
            minorProjects: [
                {
                    image: 'webp/pisecnice.webp',
                    name: 'CLI Tic Tac Toe',
                    description: 'Resizable Tic Tac Toe in Node.js. Supports win-detection & coop multiplay for > 2 players',
                    link: 'https://github.com/machacekmartin',
                },
                {
                    image: 'webp/pisecnice.webp',
                    name: 'IMG & MP4 to ASCII convertor ',
                    description: 'Python CLI script for converting images and videos into ASCII format. Includes a simple bash script for playing output ASCII video',
                    link: 'https://github.com/machacekmartin',
                },
                {
                    image: 'webp/pisecnice.webp',
                    name: 'Resource Manager',
                    description: 'Web App for managing files, code snippets and links. Vue.js, SASS (BEM), Vuex, Axios, Laravel, MySQL',
                    link: 'https://github.com/machacekmartin',
                },
                {
                    image: 'webp/pisecnice.webp',
                    name: 'Minimal Weather App',
                    description: 'Simple weather app with Nativescript, Typescript and Vue.js. Weather data is retrieved from Open Weather Map ',
                    link: 'https://github.com/machacekmartin',
                },
                {
                    image: 'webp/pisecnice.webp',
                    name: 'NPM Image Slider',
                    description: 'Simple and easy to use Image slider NPM package using Vue.js and SASS',
                    link: 'https://github.com/machacekmartin',
                },

            ]
        };
    },
};
</script>