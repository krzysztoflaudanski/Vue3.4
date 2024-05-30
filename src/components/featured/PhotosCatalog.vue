<template><div><PhotoList :photos='photos'></PhotoList></div></template>
<script>
import { mapState } from 'vuex';
import PhotoList from './PhotoList.vue'

export default {
    name: 'PhotosCatalog',
    computed: {
        ...mapState({
            photos: state => state.photos
        })
    }, 
    components: {
        PhotoList
    }
}
</script>