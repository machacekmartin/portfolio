<template>
    <li class="projects-list-item">
        <div class="projects-list-item__description">
            <h4 class="projects-list-item__type">
                {{ type }}
            </h4>
            <h2 class="projects-list-item__name">
                {{ name }}
            </h2>
            <p class="projects-list-item__text">
                {{ text }}
            </p>
            <h5>Technologies</h5>
            <p class="projects-list-item__text">{{ technologiesString }}</p>
        </div>

        <div class="projects-list-item__image">
            <img :src="image" alt="Project's image">
            <img class="projects-list-item__backdrop" :src="image" alt="Backdrop">
        </div>
    </li>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        technologies: {
            type: Array,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    computed: {
        technologiesString() {
            return this.technologies.join(", ");
        },
    },
};
</script>

<style>
</style>