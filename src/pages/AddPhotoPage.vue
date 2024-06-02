<template>
<div style="min-height: 300px;">
    <PageTitle pageTitle="Add Photo"></PageTitle>
    <AddPhotoForm></AddPhotoForm>
</div>
</template>
<script>

import PageTitle from '@/components/layout/PageTitle.vue';
import AddPhotoForm from '@/components/featured/AddPhotoForm.vue'
export default {
    name: 'AddPhotoPage',
    components: { PageTitle, AddPhotoForm }
}  </script>