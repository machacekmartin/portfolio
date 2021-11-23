<template>
    <ul class="badges-list">
        <li class="badges-list__item" v-for="item in items" :key="item">
            <!-- ICON BADGE -->
            <span>{{}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

</style>