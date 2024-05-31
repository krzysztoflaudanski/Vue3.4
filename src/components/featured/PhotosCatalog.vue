<template>
<div style="position: relative;">
    <div class="photo-list-container" :class="{ 'blurred': photosRequest.pending }">
        <div ref="catalog" style="max-height: 1200px; overflow-y: auto; overflow-x: hidden; padding: 15px;" class="mb-1"
            @scroll="handleScroll">
            <PhotoList :photos="photos" @vote="handleVote"></PhotoList>
        </div>
    </div>
    <div class="loader" v-show="photosRequest.pending"
        style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <progress-spinner />
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PhotoList from './PhotoList.vue';
import ProgressSpinner from 'primevue/progressspinner';

export default {
    name: 'PhotosCatalog',
    data() {
        return {
            currentPage: 1
        }
    },
    props: {
        category: {
            type: String,
        },
    },
    computed: {
        ...mapState({
            photos: state => state.photos,
            photosRequest: state => state.photosRequest
        })
    },
    created() {
        this.loadPhotos();
    },
    methods: {
        ...mapActions(['addVote', 'fetchCategoryPhotos']),
        loadPhotos() {
            this.currentPage++;

            if (this.category) {
                console.log(this.category)
                this.$store.dispatch('fetchCategoryPhotos', { category: this.category, page: this.currentPage });
            } else {
                this.$store.dispatch('fetchPhotos', this.currentPage);
            }
        },
        prepareScroll() {
            this.$refs.catalog.addEventListener('scroll', () => { this.handleScroll() })
        },
        handleScroll() {
            const elem = this.$refs.catalog
            const bottomOfWindow = Math.ceil(elem.scrollTop) >= (elem.scrollHeight - elem.offsetHeight)

            if (bottomOfWindow) this.loadPhotos()
        },
        handleVote(photoId) {
            this.addVote(photoId);
        }
    },
    components: {
        PhotoList, ProgressSpinner
    }
}
</script>

<style scoped>
.photo-list-container.blurred {
    position: relative;
}

.photo-list-container.blurred::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 999;
}
</style>