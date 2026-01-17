<script setup lang="ts">
import type { Post } from '@/types/post';

defineProps<{
    post: Post
}>()

const emit = defineEmits<{
    (e: 'delete', id: number): void
}>()

const deletePost = (id: number) => {
    emit('delete', id)
}

</script>

<template>
    <div class="post-item">
        <h2>{{ post.id }}</h2>
        <h2>{{ post.content }}</h2>
        <p>{{ post.status }}</p>
        <p>{{ post.createdAt }}</p>
        <button @click="deletePost(post.id)">
            Delete Post
        </button>
    </div>
</template>
