<template>
    <ul class="jobs-list">
        <jobs-list-item
            v-for="job in jobs"
            :key="job.company"
            :position="job.position"
            :duration="job.duration"
            :company="job.company"
            :duties="job.duties"
            :stack="job.stack"
        ></jobs-list-item>
    </ul>
</template>

<script>
import JobsListItem from "./JobsListItem.vue";
export default {
    components: {
        "jobs-list-item": JobsListItem,
    },
    data() {
        return {
            jobs: [
                {
                    company: "Bluesoft",
                    position: "Frontend Developer",
                    duration: "2020-2021",
                    stack: [
                        {
                            link: "https://vuejs.org/",
                            icon: "vue.svg",
                        },

                        {
                            link: "https://html5.org/",
                            icon: "html5.svg",
                        },
                        {
                            link: "https://sass-lang.com/",
                            icon: "sass.svg",
                        },
                        {
                            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
                            icon: "javascript.svg",
                        },
                        {
                            link: "https://www.kentico.com/",
                            icon: "kentico.svg",
                        },
                        {
                            link: "https://dotnet.microsoft.com/",
                            icon: "dotnet.svg",
                        },
                    ],
                    duties: [
                        "Converting UI designs into usable & dynamic web components",
                        "Creating FE templates for consuming backend APIs, implementing interactive maps",
                        "Maintaining older projects according to new style-guides and clients’ requests",

                        "Tight commucation with backend devs & UI designers",
                    ],
                },
                {
                    company: "Firmo",
                    position: "Junior Angular Developer",
                    duration: "2018",
                    stack: [
                        {
                            link: "https://angular.io/",
                            icon: "angular.svg",
                        },

                        {
                            link: "https://html5.org/",
                            icon: "html5.svg",
                        },
                        {
                            link: "https://getbootstrap.com/",
                            icon: "bootstrap.svg",
                        },
                        {
                            link: " https://www.php.net/",
                            icon: "php.svg",
                        },
                    ],
                    duties: [
                        "Fixing main product’s existing components written in Angular",
                        "Maintaining styles with bootstrap",
                        "Fixing responsiveness on existing modules",
                    ],
                },
            ],
        };
    },
};
</script>