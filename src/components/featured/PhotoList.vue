<template>
<div class="photo-list p-grid">
    <PhotoSummary class="sm:col-6 lg:col-2 md:col-3" v-for="photo in photos" :key="photo._id" :title="photo.title"
        :description="photo.description" :author="photo.author" :src="photo.src" :votes="photo.votes"
        :category="photo.category" />
</div>
</template>

<script>
import PhotoSummary from './PhotoSummary.vue'

export default {
    name: 'PhotoList',
    components: {
        PhotoSummary
    },
    props: {
        photos: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.photo-list {
    display: flex;
    flex-wrap: wrap;
}
</style>
