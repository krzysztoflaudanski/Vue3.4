<template>
<div class="form ml-2">
    <Message severity="success" v-show="success" style="width: 80%" class="mx-2">Success Message</Message>
    <Message severity="error" v-show="error" style="width: 80%" class="mx-2">Error Message</Message>
    <form class="grid" @submit.prevent="handleSubmit">
        <div class="col">
            <!-- title -->
            <div class="p-field">
                <label class="p-d-block">Title</label>
                <div class="my-2">
                    <InputText type="text" v-model="form.title" />
                </div>
            </div>

            <!-- author -->
            <div class="p-field">
                <label class="p-d-block">Author</label>
                <div class="my-2">
                    <InputText type="text" v-model="form.author" />
                </div>
            </div>

            <!-- category -->
            <div class="p-field" style="width:100%">
                <label for="category" class="p-d-block">Category</label>
                <div class="my-2">
                    <Dropdown id="category" :options="categories" v-model="form.category" optionLabel="name"
                        style="width:200px" />
                </div>
            </div>

            <!-- description -->
            <div class="p-field">
                <label class="p-d-block">Description</label>
                <div class="my-2">
                    <Textarea rows="5" cols="30" v-model="form.description" />
                </div>
            </div>

            <Button class="p-button-rounded p-button-success" type="submit" label="Add" icon="pi pi-plus" />
        </div>
        <div class="col my-2">
            <ImageUpload ref="imageUpload" @choose="handleFileChoose" />
        </div>
    </form>
</div>
</template>

<script>
import { InputText } from 'primevue/inputtext';
import { Dropdown } from 'primevue/dropdown';
import { Button } from 'primevue/button';
import Textarea from 'primevue/textarea';
import axios from 'axios';

import ImageUpload from '@/components/shared/ImageUpload.vue';
import Message from 'primevue/message';
import { mapState } from 'vuex';
import { apiUrl } from './../../../config';

export default {
    components: {
        InputText,
        Dropdown,
        Button,
        ImageUpload,
        Textarea,
        Message
    },
    data() {
        return {
            form: {
                title: '',
                author: '',
                description: '',
                category: null,
            },
            selectedFile: null,
            error: false,
            success: false,
        };
    },
    computed: {
        ...mapState({
            categories: state => state.categories.categories
        })
    },
    methods: {
        handleFileChoose(file) {
            this.selectedFile = file;
        },
        async handleSubmit() {
            this.success = false;
            this.error = false;

            const formData = new FormData();
            formData.append('title', this.form.title);
            formData.append('author', this.form.author);
            formData.append('description', this.form.description);
            formData.append('category', this.form.category.name);

            if (this.selectedFile) {
                formData.append('file', this.selectedFile);
            } else {
                this.error = true;
                console.error('No file selected');
                return;
            }

            try {
                await axios.post(`${apiUrl}/photos`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                this.success = true;
            } catch (error) {
                console.error(error);
                this.error = true;
            }
        }
    },
};
</script>

<style scoped>
.form {
    text-align: left;
}
</style>