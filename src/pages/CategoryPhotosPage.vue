<template>
<div style="min-height: 300px;">
    <PageTitle :pageTitle="category"></PageTitle>
    <PhotosCatalog :category="category"></PhotosCatalog>
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
    }
}
</script>