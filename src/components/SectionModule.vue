<template>
    <section class="section-module">
        <div class="section-module__background" v-if="svgBackground">
            <!--<object :data="require('@/assets/svg/' + svgBackground + '.svg')" type="image/svg+xml"></object>
            <img
                :src="require('@/assets/svg/' + svgBackground + '.svg')"
                alt="hello"
                ref="background"
            />-->
            
            <svg-component :file="svgBackground"></svg-component>

        </div>

        <div class="section-module__transition" v-if="transitionTop">
            <img
                :src="require('@/assets/svg/' + transitionTop + '.svg')"
                alt="hello"
            />
        </div>

        <header v-if="hasTitleSlot">
            <h3 class="section-module__title" :style="headerColorStyle">
                <slot name="title"></slot>
            </h3>
        </header>

        <div class="section-module__content">
            <slot name="body"></slot>
        </div>

        <div class="section-module__transition" v-if="transitionBottom">
            <img
                :src="require('@/assets/svg/' + transitionBottom + '.svg')"
                alt="hello"
            />
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
    },
};
</script>