import type { Post } from '@/types/post'
import { ref } from 'vue'

const dummyPosts: Post[] = [
    {
        id: 1,
        content: 'content',
        status: 'draft',
        createdAt: Date.now()
    },
    {
        id: 2,
        content: 'content2',
        status: 'draft',
        createdAt: Date.now()
    }
]

export function usePost() {
    const posts = ref<Post[]>([...dummyPosts])

    const createPost = (payload: Omit<Post, 'id' | 'createdAt'>) => {
        posts.value.unshift({
            id: Date.now(),
            createdAt: Date.now(),
            ...payload
        })
    }

    return {
        posts,
        createPost
    }
}