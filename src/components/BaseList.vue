<template>
    <ul class="base-list">
        <li v-for="item in items" :key="item">
            <p>{{ item }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>