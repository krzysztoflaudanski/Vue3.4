<template>
<Dialog header="" :closable="false" :visible="true" :style="{ maxHeight: '90vh' }" :modal="true">
    <!-- Przyciski zamykania dodane do nagłówka -->
    <template v-slot:header>
        <button-item class="p-button-rounded close-button" icon="pi pi-times" @click="$router.push('/')" />
    </template>

    <div class="dialog-content">
        <PhotoSummary v-if="photo" :id="photo._id" :title="photo.title" :description="photo.description"
            :author="photo.author" :src="photo.src" :votes="photo.votes" :category="photo.category" @vote="handleVote"
            :isDescription="true"></PhotoSummary>
    </div>
</Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import ButtonItem from 'primevue/button'
import { mapActions, mapState } from 'vuex';
import PhotoSummary from '../featured/PhotoSummary.vue';

Dialog.methods.removeStylesFromMask = () => { }

export default {
    name: 'SinglePhoto',
    data() {
        return {
            localPhoto: null
        };
    },
    computed: {
        photoId() {
            return this.$route.params.photoId
        },
        ...mapState({
            photo: state => state.photos.singlePhoto
        }),
    },
    methods: {
        ...mapActions('photos', ['fetchSinglePhoto', 'addVote']),
        loadPhoto() {
            this.fetchSinglePhoto(this.photoId)
        },
        handleVote(photoId) {
            this.addVote(photoId);
            this.loadPhoto()
        }
    },
    created() {
        this.loadPhoto();
    },
    components: { Dialog, ButtonItem, PhotoSummary }
}
</script>

<style lang="scss" scoped>
.p-dialog-mask {
    pointer-events: auto;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.4);
}

.close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}

.dialog-content {
    overflow: hidden;
    /* Ukrycie przewijania */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: calc(100vh - 8rem);
    /* Margines na nagłówek i stopkę */
    padding: 1rem;
    box-sizing: border-box;
}
</style>
