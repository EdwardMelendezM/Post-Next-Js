import LikeButton from '@/components/LikeButton'
import Link from 'next/link'

const fetchData = () => {
  return fetch('http://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())
}
export default async function Post () {
  const dataPost = await fetchData()
  return (
    dataPost.slice(0, 9).map(post => (
      <article key={post.id} style={{ padding: '15px' }}>
        <Link href='/posts/[id]' as={`post/${post.id}`}>
          <h2 style={{ color: '#09f' }}>{post.title}</h2>
        </Link>
        <p>{post.body}</p>
        <LikeButton />
      </article>
    ))
  )
};
