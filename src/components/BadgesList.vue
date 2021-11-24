<template>
    <ul class="badges-list" :class="largeStyle">
        <li class="badges-list__item"  v-for="item in items" :key="item" >
            
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        large: {
            type: Boolean,
            required: false,
            default: false
        },
        items: {
            type: Array,
            required: true,
        }
    },
    computed: {
        largeStyle(){
            return this.large ? 'badges-list--large' : ''
        }
    }
}
</script>

<style>

</style>