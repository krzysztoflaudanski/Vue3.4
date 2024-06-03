<template>
<div class="photo-summary p-shadow-4">
    <Card style="width: 180px; overflow: hidden; position: relative;">
        <template #header>
            <div class="image-container">
                <div class="layer" @click="handleVote">
                    <i class="pi pi-star center-star-icon"></i>
                </div>
                <img alt="user header" :src="image" style="object-fit: cover; width: 100%; height: 400px;" />
                <div class="star-icon">{{ votes }}<i class="pi pi-star ml-2"></i></div>
            </div>
        </template>
        <template #title>
            <div class="card-title" style="height:40px">
                <router-link :to="`/photos/${category}/${id}`" class="photo-details-link">
                    {{ title }}
                </router-link>
            </div>
        </template>
        <template #subtitle>
            <div class="author">
                <router-link :to="`/photos/${category}/:id`" class="photo-details-link">
                    by {{ author }}
                </router-link>
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
        id: {
            type: String,
            required: true
        },
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
    methods: {
        handleVote() {
            this.$emit('vote', this.id);
        }
    },
    watch: {
        votes(newVotes) {
            // Refresh UI when votes prop changes
        }
    },
    components: {
        Card, Button
    }
};
</script>

<style scoped>
.photo-details-link {
    text-decoration: none;
    transition: none;
    color: inherit
}

.photo-summary {
    padding: 10px;
    margin-bottom: 20px;
}

.image-container {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
}

.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(155, 89, 182, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.image-container:hover .layer {
    opacity: 1;
}

.star-icon {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 15px;
    color: white;
    background-color: transparent;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.center-star-icon {
    font-size: 50px;
    color: white;
}

.card-title {
    text-align: left;
    font-size: 20px;
}

.author {
    text-align: left;
}
</style>