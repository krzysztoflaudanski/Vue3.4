<template>
<div style="min-height: 300px;">
    <PageTitle pageTitle="Single Photo"></PageTitle>
    <SinglePhoto></SinglePhoto>
</div>
</template>
<script>
import PhotosCatalog from '@/components/featured/PhotosCatalog.vue';
import PageTitle from '@/components/layout/PageTitle.vue';
import SinglePhoto from '@/components/layout/SinglePhoto.vue'

export default {
    name: 'SinglePhotoPage',
    components: { PhotosCatalog, PageTitle, SinglePhoto

     }
}  </script>