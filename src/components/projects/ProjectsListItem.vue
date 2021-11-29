<template>
    <li class="projects-list-item">
        <div class="projects-list-item__image">
            <img :src="require('@/static/' + image)" :alt="image">
            <img class="projects-list-item__backdrop" :src="require('@/static/' + image)" alt="Backdrop">
        </div>
        <div class="projects-list-item__description">
            <p class="projects-list-item__type">
                {{ type }}
            </p>
            <h2 class="projects-list-item__name">
                {{ name }}
            </h2>
            <p class="projects-list-item__text">
                {{ text }}
            </p>
            <p class="bold">Technologies</p>
            <p class="projects-list-item__text">{{ technologiesString }}</p>
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