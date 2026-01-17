import { ref } from 'vue'
import type { Post } from '@/types/post'
import {
    fetchPostsApi,
    createPostApi,
    deletePostApi
} from '@/api/posts'

export function usePost() {
  const posts = ref<Post[]>([])
  const loading = ref({
    fetch: false,
    create: false,
    delete: false
  })
  const error = ref<string | null>(null)

  const fetchPosts = async () => {
    try {
        error.value = null
        loading.value.fetch = true
        const res = await fetchPostsApi()
        posts.value = res
    } catch {
        error.value = 'failed to fetch posts'
    } finally {
        loading.value.fetch = false
    }
  }

  const createPost = async (payload: Omit<Post, 'id' | 'createdAt'>): Promise<void> => {
    try {
        error.value = null
        loading.value.create = true
        const post = await createPostApi(payload)
        posts.value.unshift(post)
    } catch {
        error.value = 'failed to create post'
    } finally {
        loading.value.create = false
    }
  }

  const deletePost = async (id: Post['id']): Promise<void> => {
    try {
        error.value = null
        loading.value.delete = true
        await deletePostApi(id)
        posts.value = posts.value.filter(post => post.id !== id)
    } catch {
        error.value = 'failed to delete post'
    } finally {
        loading.value.delete = false
    }
  }

  return {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    deletePost
  }
}
