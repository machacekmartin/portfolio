<template>
    <div class="landing-banner">
        <div class="landing-banner__image">
            <img
                src="https://scontent.fprg5-1.fna.fbcdn.net/v/t1.6435-9/190447969_4211731342218392_4032012512850160404_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9qXNJ8JF-38AX9fgrCl&tn=P6wJVy3bHALTogKz&_nc_ht=scontent.fprg5-1.fna&oh=82e934fffd50108abc2133547eade509&oe=61C3EFE4"
                alt=""
            />
            <div class="landing-banner__backdrop blob"></div>
        </div>
        <div class="landing-banner__info">
            <h1 class="landing-banner__fullname">{{ name }}</h1>
            <p class="landing-banner__description">{{ description }}</p>

            <nav class="landing-banner__list">
                <a class="landing-banner__link" href=""><h4>My work</h4></a>
                <a class="landing-banner__link" href=""><h4>Previous Jobs</h4></a>
                <a class="landing-banner__link" href=""><h4>Education</h4></a>
                <a class="landing-banner__link" href=""><h4>Contact</h4></a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Martin Macháček",
            description:
                "Hi, my name is Martin, I’m from Czech Republic and I focus on Frontend Dev & Apps in general",
        };
    },
};
</script>

<style>
</style>