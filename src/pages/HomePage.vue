<template>
<div class="home">
  Photos
</div>
<PhotosCatalog></PhotosCatalog>
</template>

<script>
import PhotosCatalog from '@/components/featured/PhotosCatalog.vue';

export default {
  name: 'HomePage',
  components: { PhotosCatalog}
}  </script>
