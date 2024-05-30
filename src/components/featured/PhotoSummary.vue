<template>
<div class="photo-summary p-shadow-4">
    <Card style="width: 220px; overflow: hidden; position: relative;">
        <template #header>
            <div class="image-container">
                <img alt="user header" :src="image" style="object-fit: cover; width: 100%; height: 400px;" />
                <div class="star-icon">{{ votes }}<i class="pi pi-star ml-2"></i></div>
            </div>
        </template>
        <template #title>
            <div class="card-title">
                {{ title }}
            </div>
        </template>
        <template #subtitle>
            <div class="author">
                by {{ author }}
            </div>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button :label="category" severity="info" outlined rounded />
            </div>
        </template>
    </Card>
</div>
</template>

<script>
import Button from 'primevue/button';
import { imagesUrl } from './../../../config.js';
import Card from 'primevue/card';

export default {
    name: 'PhotoSummary',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        votes: {
            type: Number,
            required: true
        }
    },
    computed: {
        image() {
            return `${imagesUrl}${this.src}`
        }
    },
    components: {
        Card, Button
    }
};
</script>

<style scoped>
.photo-summary {
    padding: 10px;
    margin-bottom: 20px;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.star-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 15px;
    color: white;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-title {
    text-align: left;
    font-size: 20px;
}

.author {
    text-align: left;
}
</style>
