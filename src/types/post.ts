export type Post = {
  id: string
  content: string
  status: 'draft' | 'scheduled' | 'posted'
  createdAt: Date
};