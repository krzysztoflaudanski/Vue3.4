<template>
<div style="min-height: 300px;">
    <PageTitle :pageTitle="category"></PageTitle>
    <PhotosCatalog :category="category"></PhotosCatalog>
    <router-view></router-view> <!-- Dodaj router-view -->
</div>
</template>

<script>
import PhotosCatalog from '@/components/featured/PhotosCatalog.vue';
import PageTitle from '@/components/layout/PageTitle.vue';

export default {
    name: 'CategoryPhotosPage',
    components: { PhotosCatalog, PageTitle },
    data() {
        return {
            category: ''
        };
    },
    created() {
        this.category = this.$route.params.category;
    },
    watch: {
        '$route.params.category'(newCategory) {
            this.category = newCategory;
        }
    }
}
</script>