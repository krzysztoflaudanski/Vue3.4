<template>
<div class="form ml-2">
    <Message severity="success" v-show="success" style="width: 80%" class="mx-2">Success Message</Message>
    <Message severity="error" v-show="error" style="width: 80%" class="mx-2">Error Message</Message>
    <Form class="grid" @submit="handleSubmit" v-slot="{ errors }">
        <div class="col">
            <div class="p-field my-2">
                <Field class="p-field" name="title" v-slot="{ field }" rules="required|min:10|max:60">
                    <label>Title</label>
                    <div class="mt-2">
                        <InputText v-bind="field" type="text" v-model="form.title" />
                    </div>
                    <span class="redError">{{ errors.title }}</span>
                </Field>
            </div>
            <div class="p-field my-2">
                <Field class="p-field" name="author" v-slot="{ field }" rules="required|min:3|max:30">
                    <label>Title</label>
                    <div class="mt-2">
                        <InputText v-bind="field" type="text" v-model="form.author" />
                    </div>
                    <span class="redError">{{ errors.author }}</span>
                </Field>
            </div>
            <div class="p-field my-2">
                <Field class="p-field" name="category" v-slot="{ field }" rules="required">
                    <label>Category</label>
                    <div class="mt-2">
                        <Dropdown id="category" :options="categories" v-model="form.category" optionLabel="name"
                            style="width:200px" v-bind="field" />
                    </div>
                    <span class="redError">{{ errors.category }}</span>
                </Field>
            </div>
            <div class="p-field my-2">
                <Field class="p-field" name="description" v-slot="{ field }" rules="required|max:100">
                    <label>Title</label>
                    <div class="mt-2">
                        <Textarea rows="5" cols="30" v-model="form.description" v-bind="field" />
                    </div>
                    <span class="redError">{{ errors.description }}</span>
                </Field>
            </div>

            <Button class="p-button-rounded p-button-success" type="submit" label="Add" icon="pi pi-plus" />
        </div>
        <div class="col my-2">
            <ImageUpload ref="imageUpload" @choose="handleFileChoose" />
        </div>
    </Form>
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
import { Form, Field } from 'vee-validate';
import { required, min, max } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';


// defineRule('required', required)
// defineRule('min', min)
// defineRule('max', max)
defineRule('required', (value) => required(value) || 'This field is so so required...')
defineRule('min', (value, params) => min(value, params) || `It should be longer than ${params}`)
defineRule('max', (value, params) => max(value, params) || `It should be shorter than ${params}`)

export default {
    components: {
        InputText,
        Dropdown,
        Button,
        ImageUpload,
        Textarea,
        Message,
        Form,
        Field
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

.redError {
    color: red;
    font-size: 10px;
}
</style>