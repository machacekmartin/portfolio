<template>
    <main-header> </main-header>

    <section-module

        transitionBottom="background-wave-1"
    >
        <template v-slot:body>
            <landing-banner></landing-banner>
            <h4 class="up">My preffered technologies</h4>
            <badges-list :items="preferedTech" :large="true"></badges-list>
        </template>
    </section-module>

    <section-module
        headerColor="#FEFEFE"

        transitionTop="background-wave-2"
        transitionBottom="background-wave-3"
        svgBackground="background-bubbles"
    >
        <template v-slot:title>Latest Projects</template>
        <template v-slot:body>
            <projects-list></projects-list>
        </template>
    </section-module>

    <section-module
        headerColor="#1B1D25"

        transitionTop="background-wave-4"
        transitionBottom="background-wave-5"
        svgBackground="background-clouds"
    >
        <template v-slot:title> Minor projects & previous jobs </template>
        <template v-slot:body>
            <minor-projects-list></minor-projects-list>
            <jobs-list></jobs-list>
        </template>
    </section-module>

    <section-module
        transitionTop="background-wave-6"
        svgBackground="background-depth"
        :clearTitle="true"
        headerColor="#FEFEFE"
    >
        <template v-slot:title> Call me. Text me. Mail me. </template>
        <template v-slot:body>
            <contact-options></contact-options>
        </template>

    </section-module>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import JobsList from "./components/JobsList.vue";
import LandingBanner from "./components/LandingBanner.vue";
import ProjectsList from "./components/ProjectsList.vue";
import MinorProjectsList from "./components/MinorProjectsList.vue";
import BadgesList from "./components/BadgesList.vue";
import SectionModule from "./components/SectionModule.vue";
import ContactOptions from './components/ContactOptions.vue'

export default {
    components: {
        MainHeader,
        SectionModule,
        JobsList,
        ProjectsList,
        MinorProjectsList,
        BadgesList,
        LandingBanner,
        ContactOptions
    },
    data() {
        return {
            preferedTech: ["vue.js", "html5", "sass", "JS", ""],
        };
    },
};
</script>

<style lang="scss">
@import "styles/app";
</style>
