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
  { value: 'draft', label: 'Draft' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'posted', label: 'Published' }
] as const