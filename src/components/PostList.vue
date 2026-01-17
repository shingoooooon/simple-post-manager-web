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
    <div class="list-header">
      <h2>Posts</h2>
      <div class="post-count">{{ props.posts.length }} {{ props.posts.length === 1 ? 'post' : 'posts' }}</div>
    </div>
    
    <div v-if="props.posts.length === 0" class="empty-state">
      <div class="empty-icon">📝</div>
      <h3>No posts yet</h3>
      <p>Create your first post to get started!</p>
    </div>
    
    <div v-else class="posts-grid">
      <PostItem 
        v-for="post in props.posts" 
        :key="post.id"
        :post="post" 
        @delete="emit('delete', $event)"
        class="post-item"
      />
    </div>
  </div>
</template>

<style scoped>
.post-list {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f4f8;
}

.list-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.post-count {
  background: linear-gradient(135deg, #42b883, #369870);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #718096;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 10px 0;
}

.empty-state p {
  font-size: 16px;
  margin: 0;
  color: #718096;
}

.posts-grid {
  display: grid;
  gap: 20px;
}

.post-item {
  transition: all 0.3s ease;
}

.post-item:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .post-list {
    padding: 20px;
  }
  
  .list-header {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  
  .empty-state {
    padding: 40px 15px;
  }
  
  .empty-icon {
    font-size: 3rem;
  }
}
</style> 