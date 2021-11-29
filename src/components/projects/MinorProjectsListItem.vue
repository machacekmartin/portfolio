<template>
    <li class="minor-projects-list-item">
        <img class="minor-projects-list-item__image" :src="require('@/static/' + image)" :alt="image" />

        <div class="minor-projects-list-item__description">
            <h4 class="minor-projects-list-item__title">{{ name }}</h4>
            <p class="minor-projects-list-item__text">{{ description }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>
