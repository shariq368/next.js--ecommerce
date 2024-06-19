import { createClient } from 'next-sanity'



export const client = createClient({
  projectId:'77eejrbo',
  dataset:'production',
  apiVersion:'2024-06-07',
  useCdn: true,
  perspective: 'published',
})
