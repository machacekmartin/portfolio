<template>
    <section class="section-module" :style="backgroundStyle">
        <header v-if="hasTitleSlot">
            <h3 class="section-module__title" :style="headerColorStyle">
                <slot name="title"></slot>
            </h3>
        </header>

        <div class="section-module__content">
            <slot name="body"></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            required: false,
        },
        headerColor: {
            type: String,
            required: false,
        },
    },
    computed: {
        hasTitleSlot() {
            return this.$slots.title;
        },
        headerColorStyle() {
            return "color: " + this.headerColor;
        },

        backgroundStyle() {
            return "background-color: " + this.backgroundColor;
        },
    },
};
</script>