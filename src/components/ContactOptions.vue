<template>
    <div class="contact-options">
        <ul class="contact-options__list">
            <li
                class="contact-options__item"
                v-for="option in options"
                :key="option.icon"
            >
                <a class="contact-options__link" :href="option.link" target="__empty">
                    <svg-img :file="'icons/' + option.icon"></svg-img>
                </a>
            </li>
        </ul>

        <div class="contact-options__text">
            <h4>{{ email }}</h4>
            <h4>{{ phone }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: "+420 725 782 960",
            email: "macamp34@gmail.com",
            options: [
                {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
                {
                    icon: "facebook",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
                {
                    icon: "github",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
                {
                    icon: "instagram",
                    link: "https://www.linkedin.com/in/mmachacek/",
                },
            ],
        };
    },
};
</script>

<style>
</style>