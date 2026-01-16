<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/types/post'

type CreatePostPayload = {
    content: string
    status: Post['status']
}

type PostStatus = Post['status']

const emit = defineEmits<{
    (e: 'submit', payload: CreatePostPayload): void
}>()

const STATUS_OPTIONS = [
    { value: 'draft', label: '下書き' },
    { value: 'published', label: '公開' },
    { value: 'private', label: '非公開' }
]

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
  <div>
    <textarea
      v-model="content"
      placeholder="投稿内容"
    ></textarea>
    <select v-model="status">
        <option
            v-for="option in STATUS_OPTIONS"
            :key="option.value"
            :value="option.value"
        >
            {{ option.label }}
        >
        </option>
    </select>
    <button @click="submit">
      Create
    </button>
  </div>
</template>
