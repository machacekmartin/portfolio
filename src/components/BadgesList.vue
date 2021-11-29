<template>
    <ul class="badges-list" :class="largeStyle">
        <li class="badges-list__item"  v-for="item in items" :key="item" >
            <a class="badges-list__link" :href="item.link" target="_blank">
                <img :src="require('@/static/svg/icons/' + item.icon)" :alt="item.icon">
            </a>
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