<template>
    <li class="jobs-list-item">
        <h4 class="jobs-list-item__position">{{ position }}</h4>
        <div class="jobs-list-item__detail">
            <span>{{ duration }}</span>
            <span>@ {{ company }}</span>
        </div>
        <h5 class="jobs-list-item__category-header">Duties</h5>
        <ul class="jobs-list-item__duties">
            <li v-for="item in duties" :key="item">
                <p>{{ item }}</p>
            </li>
        </ul>

        <div class="jobs-list-item__stack">
            <h5 class="jobs-list-item__category-header">Primary Tech Stack</h5>
            <badges-list :items="stack"></badges-list>
        </div>
    </li>
</template>

<script>
import BadgesList from "../BadgesList.vue";
export default {
    components: {
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