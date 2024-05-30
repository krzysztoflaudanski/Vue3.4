<template>
<header class="ml-2">
    <h2 class="heading ">{{ pageTitle }}</h2>
</header>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        pageTitle: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.heading {
    font-size: 18px;
    text-align: left;
}
</style>