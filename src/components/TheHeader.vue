<template>
    <header class="the-header">
        <div class="the-header__wrapper">
            <h4 class="the-header__title">
                <span></span>
                <span></span>
                <span></span>

                My Portfolio
            </h4>
            <contact-links :items="options"></contact-links>
        </div>
    </header>
</template>

<script>
import ContactLinks from "./ContactLinks.vue";
export default {
    components: {
        ContactLinks,
    },
    data() {
        return {
            options: [
                {
                    icon: "linkedin.svg",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
                {
                    icon: "facebook.svg",
                    link: "https://www.facebook.com/Macampp/",
                },
                {
                    icon: "github.svg",
                    link: "https://github.com/machacekmartin/",
                },
            ],
        };
    },
};
</script>