<template>
    <section class="section-module">
        <div class="section-module__background" v-if="svgBackground">
            <img :src="require('@/static/svg/' + svgBackground + '.svg')">
        </div>

        <div class="section-module__transition" v-if="transitionTop">
           <img :src="require('@/static/svg/' + transitionTop + '.svg')">
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
            <img :src="require('@/static/svg/' + transitionBottom + '.svg')">
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