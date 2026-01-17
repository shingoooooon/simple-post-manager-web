import { apiClient } from '@/api/client'
import type { Post } from '@/types/post'

export type CreatePostDTO = Omit<Post, 'id' | 'createdAt'>

export const fetchPostsApi = async (): Promise<Post[]> => {
    const res = await apiClient.get<Post[]>('/posts')
    return res.data
}

export const createPostApi = async (payload: CreatePostDTO): Promise<Post>  => {
    const res = await apiClient.post<Post>('posts', payload)
    return res.data
}

export const deletePostApi = async (id: Post['id']): Promise<void> => {
    await apiClient.delete(`/posts/${id}`)
}
