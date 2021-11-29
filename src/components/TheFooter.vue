<template>
    <div class="the-footer">
        <contact-links :items="options" :large="true"></contact-links>

        <div class="the-footer__text">
            <h4>{{ email }}</h4>
            <h4>{{ phone }}</h4>
        </div>
    </div>
</template>

<script>

import ContactLinks from './ContactLinks.vue'

export default {
    components: {
        ContactLinks
    },
    data() {
        return {
            phone: "+420 725 782 960",
            email: "macamp34@gmail.com",
            options: [
                {
                    icon: "linkedin.svg",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
                {
                    icon: "facebook.svg",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
                {
                    icon: "github.svg",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
                {
                    icon: "instagram.svg",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
            ],
        };
    },
};
</script>