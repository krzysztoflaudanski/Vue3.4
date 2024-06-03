<template>
<Dialog header="Header" :closable="false" :visible="true" :style="{ width: '50vw' }" :modal="true">

    {{ photoId }} {{ singlePhoto }}

    <template v-slot:footer>
        <button-item class="p-button-rounded" label="Close" icon="pi pi-times" @click="$router.push('/')" autofocus />
    </template>
</Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import ButtonItem from 'primevue/button'
import { mapActions, mapState } from 'vuex';

// fix version inconsistence
Dialog.methods.removeStylesFromMask = () => { }

export default {
    name: 'SinglePhoto',
    computed: {
        photoId() {
            return this.$route.params.photoId
        },
        ...mapState({
            singlePhoto: state => state.photos.singlePhoto
        })
    },
    methods: {
        ...mapActions('photos', ['fetchSinglePhoto']),
        loadPhoto() {
            this.fetchSinglePhoto(this.photoId)
            console.log(this.photoId)
        },
    }, created() {
        this.loadPhoto();
    },

    components: { Dialog, ButtonItem }
}
</script>

<style lang="scss" scoped>
.p-dialog-mask {
    pointer-events: auto;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.4);
}
</style>