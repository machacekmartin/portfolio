<template>
    <div class="jobs-list-item">
        <h4 class="jobs-list-item__position">{{ position }}</h4>
        <div class="jobs-list-item__detail">
            <h5>{{ duration }}</h5>
            <h5>@ {{ company }}</h5>
        </div>
        <h5 class="jobs-list-item__category-header">Duties</h5>
        <base-list :items="duties"> </base-list>

        <h5 class="jobs-list-item__category-header">Primary Tech Stack</h5>
        <badges-list :items="stack"></badges-list>
    </div>
</template>

<script>
import BaseList from "./BaseList.vue";
import BadgesList from "./BadgesList.vue";
export default {
    components: {
        "base-list": BaseList,
        "badges-list": BadgesList,
    },
    props: {
        position: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        duties: {
            type: Array,
            required: true,
        },
        stack: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
</style>