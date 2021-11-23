<template>
    <the-header></the-header>
    <h1>Martin Macháček</h1>
    <h3>Latest Projects</h3>
    <h2>Latest Projects</h2>

    <section>
        <section-title text="Previous Jobs"></section-title>

        <grid-layout :columnCount="2">
            <job-card
                v-for="job in jobs"
                :key="job.company"
                :position="job.position"
                :duration="job.duration"
                :company="job.company"
                :duties="job.duties"
                :stack="job.stack"
            ></job-card>
        </grid-layout>
    </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import SectionTitle from "./components/SectionTitle.vue";
import JobCard from "./components/JobCard.vue";
import GridLayout from './components/GridLayout.vue'

export default {
    components: {
        TheHeader,
        SectionTitle,
        JobCard,
        GridLayout,
    },
    data() {
        return {
            jobs: [
                {
                    company: "Bluesoft",
                    position: "Frontend Developer",
                    duration: "2020-2021",
                    stack: [],
                    duties: [
                        "Converting UI designs into usable & dynamic web components",
                        "Fixing and maintaining existing projects",
                        "Updating older projects according to new style-guides and clients’ requests",
                        "Tight commucation with backend devs & UI designers",
                    ],
                },
                {
                    company: "Bluesoft",
                    position: "Frontend Developer",
                    duration: "2020-2021",
                    stack: [],
                    duties: [
                        "Converting UI designs into usable & dynamic web components",
                        "Fixing and maintaining existing projects",
                        "Updating older projects according to new style-guides and clients’ requests",
                        "Tight commucation with backend devs & UI designers",
                    ],
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "styles/app";
</style>
