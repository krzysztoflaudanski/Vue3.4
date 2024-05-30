<template>
<div style="min-height: 300px;">
  <PageTitle pageTitle="Photos"></PageTitle>
  <PhotosCatalog></PhotosCatalog>
</div>
</template>
<script>
import PhotosCatalog from '@/components/featured/PhotosCatalog.vue';
import PageTitle from '@/components/layout/PageTitle.vue';

export default {
  name: 'HomePage',
  components: { PhotosCatalog, PageTitle }
}  </script>
