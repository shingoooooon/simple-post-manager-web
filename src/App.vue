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
  <div class="app">
    <div class="container">
      <header class="header">
        <div class="logo">
          <svg class="vue-logo" viewBox="0 0 261.76 226.69">
            <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
            <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
          </svg>
          <h1>Post Manager</h1>
        </div>
        <div class="filter-controls">
          <label for="status-filter">Filter by status:</label>
          <select v-model="filterStatus" id="status-filter" class="status-filter">
            <option value="all">All Posts</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="posted">Published</option>
          </select>
        </div>
      </header>
      
      <main class="main">
        <PostForm @submit="createPost" class="form-section"/>
        <PostList :posts="filteredPosts" @delete="deletePost" class="list-section"/>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}

.vue-logo {
  width: 40px;
  height: 40px;
}

.logo h1 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.filter-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-controls label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 16px;
}

.status-filter {
  padding: 12px 20px;
  border: 2px solid #42b883;
  border-radius: 25px;
  background: white;
  font-size: 16px;
  font-weight: 500;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  min-width: 150px;
}

.status-filter:hover {
  border-color: #369870;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
}

.status-filter:focus {
  border-color: #369870;
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.2);
}

.main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  align-items: start;
}

.form-section {
  position: sticky;
  top: 20px;
}

@media (max-width: 1024px) {
  .main {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .form-section {
    position: static;
  }
}

@media (max-width: 768px) {
  .app {
    padding: 15px;
  }
  
  .header {
    padding: 20px;
  }
  
  .logo h1 {
    font-size: 2rem;
  }
  
  .filter-controls {
    flex-direction: column;
    gap: 10px;
  }
  
  .status-filter {
    width: 100%;
  }
}
</style>
