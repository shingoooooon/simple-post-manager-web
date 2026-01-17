<script setup lang="ts">
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import { usePost } from './composables/usePost';

const { posts, createPost, deletePost } = usePost()

</script>

<template>
  <div>
    <PostList :posts="posts" @delete="deletePost"/>
    <PostForm @submit="createPost"/>
  </div>
</template>

<style scoped>

</style>
