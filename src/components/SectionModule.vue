<template>
    <section class="section-module">
        <div class="section-module__background" v-if="svgBackground">
            <svg-img :file="svgBackground"></svg-img>
        </div>

        <div class="section-module__transition" v-if="transitionTop">
            <svg-img :file="transitionTop"></svg-img>
        </div>

        <header v-if="hasTitleSlot">
            <h3 class="section-module__title" :class="titlePureClass" :style="headerColorStyle">
                <slot name="title"></slot>
            </h3>
        </header>

        <div class="section-module__content">
            <slot name="body"></slot>
        </div>

        <div class="section-module__transition" v-if="transitionBottom">
            <svg-img :file="transitionBottom"></svg-img>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        transitionTop: {
            type: String,
            required: false,
            default: null,
        },
        transitionBottom: {
            type: String,
            required: false,
            default: null,
        },
        svgBackground: {
            type: String,
            required: false,
            default: null,
        },
        headerColor: {
            type: String,
            required: false,
        },
        clearTitle: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        hasTransitionTop() {
            return this.$slots.transitionTop;
        },
        hasTransitionBottom() {
            return this.$slots.transitionBottom;
        },
        hasTitleSlot() {
            return this.$slots.title;
        },
        headerColorStyle() {
            return "color: " + this.headerColor;
        },
        titlePureClass(){
            return this.clearTitle ? 'section-module__title--pure' : ''
        }
    },
};
</script>