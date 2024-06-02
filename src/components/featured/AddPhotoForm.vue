<template>
    <div class="form ml-2">
<form class="grid">
    <div class="col">

        <!-- title -->
        <div class="p-field">
            <label class="p-d-block">Title</label>
            <div class="my-2">
                <input-text type="text" v-model="form.title" />
            </div>
        </div>

        <!-- author -->
        <div class="p-field">
            <label class="p-d-block">Author</label>
            <div class="my-2" >
                <input-text type="text" v-model="form.author" />
            </div>
        </div>

        <!-- category -->

        <div class="p-field" style="width:100%">
            <label for="category" class="p-d-block">Category</label>
            <div class="my-2">
                <Dropdown id="category" :options="categories" v-model="form.category" optionLabel="name" style="width:200px"/>
            </div>
        </div>
        <!-- description -->
        <div class="p-field">
            <label class="p-d-block">Description</label>
            <div class="my-2">
                <text-area rows="5" cols="30" v-model="form.description" />
            </div>
        </div>

        <Button class="p-button-rounded p-button-success" type="submit" label="Add" icon="pi pi-plus" />

    </div>
    <div class="col my-2">
        <ImageUpload></ImageUpload>
    </div>
</form>
</div>
</template>

<script>
import { InputText } from 'primevue/inputtext';
import { Dropdown } from 'primevue/dropdown';
import { Button } from 'primevue/button';
import Textarea from 'primevue/textarea';

import ImageUpload from '@/components/shared/ImageUpload.vue';

export default {
    components: {
        InputText,
        Dropdown,
        Button,
        ImageUpload,
        Textarea
    },
    data() {
        return {
            form: {
                title: '',
                author: '',
                description: '',
                category: null,
            },
            categories: [
                { name: 'Nature', code: 'nature' },
                { name: 'City', code: 'city' },
                { name: 'People', code: 'people' },
                { name: 'Animals', code: 'animals' },
            ],
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.form);
        },
    },
};
</script>

<style scoped>
.form {
    text-align: left;
}
/* .form-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.form {
    width: 100%;
}

.form-fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.image-upload-container {
    margin-top: 1rem;
} */
</style>