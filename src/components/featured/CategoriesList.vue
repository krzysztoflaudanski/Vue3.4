<template>
<div class="relative">
    <div class="flex align-items-left">
        <router-link v-for="category in categories" :key="category.id" :to="`/photos/${category.name}`" class="ml-2">
            <Button :label="category.name" severity="info" outlined rounded />
        </router-link>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Button from 'primevue/button';

export default {
    name: 'CategoriesList',
    computed: {
        ...mapState({
            categories: state => state.categories
        })
    },
    components: {
        Button,
    }
};
</script>