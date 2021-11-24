<template>
    <ul class="minor-projects-list">
        <minor-projects-list-item
            v-for="minorProject in minorProjects"
            :key="minorProject.name"
            :image="minorProject.image"
            :name="minorProject.name"
            :description="minorProject.description"
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
                    image: 'https://winningestate.cz/wp-content/uploads/2020/06/06c_maura_popuvky.jpg',
                    name: 'CLI Tic Tac Toe',
                    description: 'Resizable Tic Tac Toe in Node.js. Supports win-detection & coop multiplay for > 2 players'
                },
                {
                    image: 'https://winningestate.cz/wp-content/uploads/2020/06/06c_maura_popuvky.jpg',
                    name: 'IMG & MP4 to ASCII convertor ',
                    description: 'Resizable Tic Tac Toe in Node.js. Supports win-detection & coop multiplay for > 2 players'
                },
                {
                    image: 'https://winningestate.cz/wp-content/uploads/2020/06/06c_maura_popuvky.jpg',
                    name: 'Resource Manager',
                    description: 'Resizable Tic Tac Toe in Node.js. Supports win-detection & coop multiplay for > 2 players'
                },
                {
                    image: 'https://winningestate.cz/wp-content/uploads/2020/06/06c_maura_popuvky.jpg',
                    name: 'Minimal Weather App',
                    description: 'Resizable Tic Tac Toe in Node.js. Supports win-detection & coop multiplay for > 2 players'
                },
                {
                    image: 'https://winningestate.cz/wp-content/uploads/2020/06/06c_maura_popuvky.jpg',
                    name: 'NPM Image Slider',
                    description: 'Resizable Tic Tac Toe in Node.js. Supports win-detection & coop multiplay for > 2 players'
                },

            ]
        };
    },
};
</script>

<style>
</style>