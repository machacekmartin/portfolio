<template>
    <img :src="svgPath" alt="svg image">
</template>

<script>
export default {
    props: {
        file: {
            type: String,
            required: true
        }
    },

    computed: {
        svgPath(){
            return require('@/static/svg/' + this.file + '.svg')
        }
    }

}
</script>

<style>

</style>