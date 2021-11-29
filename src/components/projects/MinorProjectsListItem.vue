<template>
    <li class="minor-projects-list-item">
        <a class="minor-projects-list-item__link" :href="link" target="_blank" rel="noopener">
            <img
                class="minor-projects-list-item__image"
                :src="require('@/static/' + image)"
                :alt="image"
            />

            <div class="minor-projects-list-item__description">
                <h4 class="minor-projects-list-item__title">{{ name }}</h4>
                <p class="minor-projects-list-item__text">{{ description }}</p>
            </div>
        </a>
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
        link: {
            type: String,
            required: true
        }
    },
};
</script>
