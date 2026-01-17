<script setup lang="ts">
import type { Post } from '@/types/post';
import PostItem from './PostItem.vue';

const props = defineProps<{
  posts: Post[]
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()

</script>

<template>
  <div class="post-list">
    <div class="post" v-for="post in props.posts">
        <PostItem :post="post" @delete="emit('delete', $event)"/>
    </div>
  </div>
</template> 