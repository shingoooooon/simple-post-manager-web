<script setup lang="ts">
import type { Post } from '@/types/post';
import { STATUS_OPTIONS } from '@/types/post';

defineProps<{
    post: Post
}>()

const emit = defineEmits<{
    (e: 'delete', id: number): void
}>()

const deletePost = (id: number) => {
    emit('delete', id)
}

const getStatusLabel = (status: Post['status']) => {
    return STATUS_OPTIONS.find(option => option.value === status)?.label || status
}

const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}
</script>

<template>
  <div class="post-item">
    <div class="post-header">
      <div class="post-meta">
        <span class="post-id">#{{ post.id }}</span>
        <span class="post-date">{{ formatDate(post.createdAt) }}</span>
      </div>
      <span :class="['status-badge', `status-${post.status}`]">
        {{ getStatusLabel(post.status) }}
      </span>
    </div>
    
    <div class="post-content">
      <p>{{ post.content }}</p>
    </div>
    
    <div class="post-actions">
      <button @click="deletePost(post.id)" class="delete-btn">
        <svg class="delete-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped>
.post-item {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.post-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #42b883, #35495e);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.post-item:hover {
  border-color: #42b883;
  box-shadow: 0 8px 25px rgba(66, 184, 131, 0.15);
  transform: translateY(-2px);
}

.post-item:hover::before {
  opacity: 1;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 15px;
}

.post-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.post-id {
  font-size: 12px;
  font-weight: 700;
  color: #42b883;
  background: rgba(66, 184, 131, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
  width: fit-content;
}

.post-date {
  font-size: 11px;
  color: #718096;
  font-weight: 500;
}

.status-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.status-draft {
  background: linear-gradient(135deg, #fed7d7, #feb2b2);
  color: #c53030;
}

.status-scheduled {
  background: linear-gradient(135deg, #feebc8, #fbd38d);
  color: #dd6b20;
}

.status-posted {
  background: linear-gradient(135deg, #c6f6d5, #9ae6b4);
  color: #38a169;
}

.post-content {
  margin-bottom: 20px;
}

.post-content p {
  margin: 0;
  line-height: 1.6;
  color: #2d3748;
  font-size: 15px;
  font-weight: 400;
}

.post-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  border-top: 1px solid #e2e8f0;
}

.delete-btn {
  background: linear-gradient(135deg, #fed7d7, #feb2b2);
  color: #c53030;
  border: 2px solid #feb2b2;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.delete-btn:hover {
  background: linear-gradient(135deg, #feb2b2, #fc8181);
  border-color: #fc8181;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(197, 48, 48, 0.3);
}

.delete-btn:active {
  transform: translateY(0);
}

.delete-icon {
  width: 14px;
  height: 14px;
}

@media (max-width: 768px) {
  .post-item {
    padding: 15px;
  }
  
  .post-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .post-meta {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  
  .post-actions {
    justify-content: center;
  }
  
  .delete-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
