<template>
    <header class="section-title">
        <h3 class="section-title__text" :class="colorStyle">{{ text }}</h3>
    </header>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        mode: {
            type: String,
            required: false,
            default: 'dark',
            validator: (val) => {
                return ['dark', 'bright'].includes(val)
            }
        }
    },
    computed: {
        colorStyle(){
            let base = 'section-title__text'
            return base + '--'+ this.mode
        }
    }
};
</script>

<style>
</style>