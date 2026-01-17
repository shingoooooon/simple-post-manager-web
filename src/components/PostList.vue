<script setup lang="ts">
import type { Post } from '@/types/post';
import PostItem from './PostItem.vue';

const props = defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <div class="post-list">
    <div class="post" v-for="post in props.posts">
        <PostItem :post="post" />
    </div>
  </div>
</template> 