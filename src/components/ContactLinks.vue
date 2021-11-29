<template>
    <nav class="contact-links" :class="largeStyle">
        <a
            class="contact-links__item"
            :href="item.link"
            target="_blank"
            rel="noopener"
            v-for="item in items"
            :key="item.icon"
        >
            <img
                :src="require('@/static/svg/icons/' + item.icon)"
                :alt="item.icon"
            />
        </a>
    </nav>
</template>

<script>
export default {
    props: {
        large: {
            type: Boolean,
            required: false,
            default: false,
        },
        items: {
            type: Array,
            required: true,
        },
    },
    computed: {
        largeStyle() {
            return this.large ? "contact-links--large" : "";
        },
    },
};
</script>