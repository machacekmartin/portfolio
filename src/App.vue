<template>
    <the-header></the-header>

    <section-module 
        transitionBottom="background-wave-1"
        svgBackground="background-clouds"
    >
        <template v-slot:body>
            <landing-banner></landing-banner>
            <span class="up bold">My favourite technologies</span>
            <badges-list :items="preferedTechIcons" :large="true"></badges-list>
        </template>
    </section-module>

    <section-module
        id="projects"
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
            <minor-projects-list id="minor"></minor-projects-list>
            <jobs-list id="jobs"></jobs-list>
        </template>
    </section-module>

    <section-module
        id="contact"
        transitionTop="background-wave-6"
        svgBackground="background-depth"
        :clearTitle="true"
        headerColor="#FEFEFE"
    >
        <template v-slot:title> Call me. Text me. Mail me. </template>
        <template v-slot:body>
            <the-footer></the-footer>
        </template>
    </section-module>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import JobsList from "./components/jobs/JobsList.vue";
import LandingBanner from "./components/LandingBanner.vue";
import ProjectsList from "./components/projects/ProjectsList.vue";
import MinorProjectsList from "./components/projects/MinorProjectsList.vue";
import BadgesList from "./components/BadgesList.vue";
import SectionModule from "./components/SectionModule.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
    components: {
        TheHeader,
        SectionModule,
        JobsList,
        ProjectsList,
        MinorProjectsList,
        BadgesList,
        LandingBanner,
        TheFooter,
    },
    data() {
        return {
            preferedTechIcons: [
                {
                    link: "https://vuejs.org/",
                    icon: "vue.svg",
                },
                {
                    link: "https://sass-lang.com/",
                    icon: "sass.svg",
                },
                {
                    link: "https://html5.org/",
                    icon: "html5.svg",
                },
                {
                    link: "https://www.typescriptlang.org/",
                    icon: "typescript.svg",
                },
                {
                    link: "https://graphql.org/",
                    icon: "graphql.svg",
                },
                {
                    link: "https://www.python.org/",
                    icon: "python.svg",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "styles/app";
</style>
