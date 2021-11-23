<template>
    <div class="job-card">
        <h4 class="job-card__position">{{ position }}</h4>
        <div class="job-card__detail">
            <p>{{ duration }}</p>
            <p>@ {{ company }}</p>
        </div>
        <h5 class="job-card__category-header">Duties</h5>
        <base-list :items="duties"> </base-list>

        <h5 class="job-card__category-header">Primary Tech Stack</h5>
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