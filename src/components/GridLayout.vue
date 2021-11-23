<template>
    <div class="grid-layout">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        columnCount: {
            type: Number,
            required: true
        },
    },


}
</script>

<style>

</style>