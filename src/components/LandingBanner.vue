<template>
    <div class="landing-banner">
        <div class="landing-banner__image">
            <img
                :src="require('@/static/webp/' + image)"
                alt="Me, Myself and I"
            />
        </div>
        <div class="landing-banner__info">
            <h1 class="landing-banner__fullname">{{ name }}</h1>
            <p class="landing-banner__description">{{ description }}</p>

            <nav class="landing-banner__list">
                <a class="landing-banner__link" href="#projects"><span>My work</span></a>
                <a class="landing-banner__link" href="#minor"><span>Minor projects</span></a>
                <a class="landing-banner__link" href="#jobs"><span>Previous jobs</span></a>
                <a class="landing-banner__link" href="#contact"><span>Contact</span></a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Martin Macháček",
            description: "Hi, my name is Martin, I’m from Czech Republic and I focus on Frontend Dev & Apps in general",
            image: 'profile.webp'
        };
    },
};
</script>
