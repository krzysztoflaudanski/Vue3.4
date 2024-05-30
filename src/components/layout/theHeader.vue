<template>
<header class="header p-mt-2 p-mb-2">
    <div class="relative">
        <div class="flex align-items-center">

            <div class="flex align-items-center p-4 ">
                <router-link style="text-decoration: none;
          color: inherit;" :to="{ path: '/' }">
                    <h1 v-text="'PhotosApp | '" class="underline" />
                </router-link>
                <h1 v-text="' share your moments'" class="text-lg" />
            </div>
            <div class="block ml-auto mr-3">
                <router-link :to="{ path: '/' }">
                    <Button label="+ Submit" class="p-button-raised" rounded></Button>
                </router-link>
            </div>
        </div>
        <Divider />
        <CategoriesList></CategoriesList>
    </div>

</header>
</template>

<script>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import CategoriesList from './../featured/CategoriesList.vue'
export default {
    name: 'AppHeader',
    components: {
        Button,
        Divider,
        CategoriesList

    },
}
</script>

<style></style>