import Link from 'next/link'

const singleFetch = (id) => {
  return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}
export default async function PostId ({ children, params }) {
  const { id } = params
  const post = await singleFetch(id)
  console.log(post)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/post/${id}/comments`}>
        Ver comentarios
      </Link>
      {children}
    </article>
  )
};
