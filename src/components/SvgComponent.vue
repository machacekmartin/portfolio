<template>
    <svg :viewBox="'0 0 '+ viewBoxWidth + ' ' + viewBoxHeight">
        <use :xlink:href="svgFile"></use>
    </svg>
</template>

<script>
export default {
    props: {
        viewBoxHeight: {
            type: Number,
            required: false,
            default: 1800
        },
        viewBoxWidth: {
            type: Number,
            required: false,
            default: 1500
        },
        file: {
            type: String,
            required: true
        }
    },
    computed: {
        svgFile(){
            return require('../assets/svg/background-bubbles.svg')
        }
    }
};
</script>

<style>
</style>