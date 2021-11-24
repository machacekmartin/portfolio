<template>
    <header class="main-header">
        <div class="main-header__wrapper">
            <h4 class="main-header__title">
                <span></span>
                <span></span>
                <span></span>

                My Portfolio
            </h4>
            <nav class="main-header__links">
                <a
                    class="main-header__link"
                    v-for="link in links"
                    :key="link"
                    >{{ link }}</a
                >
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: ["Github", "Linkedin", "Facebook"],
        };
    },
};
</script>

<style>
</style>