<script setup lang="ts">
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import { usePost } from './composables/usePost';

const { posts, createPost } = usePost()

</script>

<template>
  <div>
    <PostList :posts="posts" />
    <PostForm @submit="createPost"/>
  </div>
</template>

<style scoped>

</style>
