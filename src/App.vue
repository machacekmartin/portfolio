<template>
    <main-header> </main-header>

    <section-module>
        <template v-slot:body>
            <landing-banner></landing-banner>
            <h4 class="up">My preffered technologies</h4>
            <badges-list :items="preferedTech" :large="true"></badges-list>
        </template>
    </section-module>

    <div class="wave1"></div>

    <section-module backgroundColor="#1B1D25" headerColor="#FEFEFE">
        <template v-slot:title>Latest Projects</template>
        <template v-slot:body>
            <projects-list></projects-list>
        </template>
    </section-module>

    <section-module headerColor="#1B1D25">
        <template v-slot:title> Previous Jobs </template>
        <template v-slot:body>
            <jobs-list></jobs-list>
        </template>
    </section-module>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import JobsList from "./components/JobsList.vue";
import LandingBanner from "./components/LandingBanner.vue";
import ProjectsList from "./components/ProjectsList.vue";
import BadgesList from "./components/BadgesList.vue";
import SectionModule from "./components/SectionModule.vue";

export default {
    components: {
        MainHeader,
        SectionModule,
        JobsList,
        ProjectsList,
        BadgesList,
        LandingBanner,
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
