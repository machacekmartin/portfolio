<template>
    <li class="minor-projects-list-item">
        <img class="minor-projects-list-item__image" :src="image" alt="" />

        <h4 class="minor-projects-list-item__title">{{ name }}</h4>
        <p class="minor-projects-list-item__description">{{ description }}</p>
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
