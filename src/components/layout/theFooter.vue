<template>
<footer class="mr-2 ml-2">
    <div class="flex justify-content-between flex-wrap">
    <div class="flex align-items-center justify-content-center">2024 All rights reserved
    </div>
    <div class="flex align-items-center justify-content-center ">We have {{ categoriesAmount }} categories!</div>
</div>
</footer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'AppFooter', computed: {
        ...mapGetters({
            categoriesAmount: 'categoriesAmount'
        })
    }
}
</script>
<style>
footer {
    font-size: 10px;
    opacity:0.8;
}
</style>