<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/types/post'
import { STATUS_OPTIONS } from '@/types/post'

type CreatePostPayload = {
    content: string
    status: Post['status']
}

type PostStatus = Post['status']

const emit = defineEmits<{
    (e: 'submit', payload: CreatePostPayload): void
}>()

const content = ref('')
const status = ref<PostStatus>('draft')

const submit = () => {
    if (!content.value.trim()) return

    emit('submit', {
        content: content.value,
        status: status.value,
    })

    content.value = ''
    status.value = 'draft'
}
</script>

<template>
  <div class="post-form">
    <div class="form-header">
      <h2>Create New Post</h2>
      <div class="form-icon">✨</div>
    </div>
    
    <form @submit.prevent="submit" class="form">
      <div class="form-group">
        <label for="content" class="form-label">Content</label>
        <textarea
          id="content"
          v-model="content"
          placeholder="What's on your mind?"
          class="content-input"
          rows="4"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label for="status" class="form-label">Status</label>
        <div class="select-wrapper">
          <select v-model="status" id="status" class="status-select">
            <option
              v-for="option in STATUS_OPTIONS"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <div class="select-arrow">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      <button type="submit" class="submit-btn" :disabled="!content.trim()">
        <span class="btn-text">Create Post</span>
        <div class="btn-icon">→</div>
      </button>
    </form>
  </div>
</template>

<style scoped>
.post-form {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}

.form-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.form-icon {
  font-size: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.content-input {
  padding: 15px;
  border: 2px solid #e0e6ed;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  background: white;
}

.content-input:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.1);
}

.content-input::placeholder {
  color: #a0aec0;
}

.select-wrapper {
  position: relative;
}

.status-select {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e6ed;
  border-radius: 12px;
  background: white;
  font-size: 16px;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  padding-right: 45px;
}

.status-select:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.1);
}

.select-arrow {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #718096;
  pointer-events: none;
}

.submit-btn {
  background: linear-gradient(135deg, #42b883, #369870);
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(66, 184, 131, 0.4);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-btn:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-text {
  transition: transform 0.3s ease;
}

.btn-icon {
  transition: transform 0.3s ease;
  font-size: 18px;
}

.submit-btn:hover:not(:disabled) .btn-icon {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .post-form {
    padding: 20px;
  }
  
  .form-header {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>
