<script setup lang="ts">
import { ref, computed } from 'vue';
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import { usePost } from './composables/usePost';
import type { Post } from './types/post';

const { posts, createPost, deletePost } = usePost()

const filterStatus = ref<'all' | Post['status']>('all')

const filteredPosts = computed(() => {
  if (filterStatus.value === 'all') return posts.value
  return posts.value.filter((post) => post.status === filterStatus.value)
})

</script>

<template>
  <div>
    <h1>Simple Post manager</h1>
    <select v-model="filterStatus" name="status" id="status">
      <option value="all">All</option>
      <option value="draft">Draft</option>
      <option value="scheduled">Scheduled</option>
      <option value="posted">Posted</option>
    </select>
    <PostList :posts="filteredPosts" @delete="deletePost"/>
    <PostForm @submit="createPost"/>
  </div>
</template>

<style scoped>

</style>
