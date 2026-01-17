export type Post = {
  id: number
  content: string
  status: 'draft' | 'scheduled' | 'posted'
  createdAt: number
};