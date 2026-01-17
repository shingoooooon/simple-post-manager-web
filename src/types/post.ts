export type Post = {
  id: number
  content: string
  status: 'draft' | 'scheduled' | 'posted'
  createdAt: number
};

export const STATUS_OPTIONS: Array<{
  value: Post['status']
  label: string
}> = [
  { value: 'draft', label: '下書き' },
  { value: 'scheduled', label: '予約投稿' },
  { value: 'posted', label: '投稿済み' }
] as const