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
                        'vue.js',
                        'html5',
                        'sass',
                        'kentico',
                        '.net',
                        'php',

                    ],
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
                    stack: [
                        'vue.js',
                        'html5',
                        'sass',
                        'kentico',
   
                    ],
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