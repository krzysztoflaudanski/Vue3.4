<template>
<div class="relative">
    <div class="flex align-items-left">
        <div v-for="category in categories" :key="category.id" class="ml-2">
            <Button :label="category.name" severity="info" outlined rounded />
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from 'primevue/button';

export default {
    name: 'CategoriesList',
    computed: {
        ...mapState({
            categories: state => state.categories
        })
    },
    // methods: {
    //     ...mapActions([
    //         'fetchCategories'
    //     ])
    // },
    // created() {
    //     this.fetchCategories();
    // },
    components: {
        Button,
    }
};
</script>