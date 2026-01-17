<script setup lang="ts">
import type { Post } from '@/types/post';

defineProps<{
    post: Post
}>()

</script>

<template>
    <div class="post-item">
        <h2>{{ post.id }}</h2>
        <h2>{{ post.content }}</h2>
        <p>{{ post.status }}</p>
        <p>{{ post.createdAt }}</p>
    </div>
</template>
