import Image from 'next/image'

const singleFetch = (id) => {
  // throw new Error("Error")
  return fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}
export default async function PostId ({ params }) {
  const { id } = params
  const comments = await singleFetch(id)
  return (
    <ul style={{ padding: '15px', fontSize: '10px', backgroundColor: '#444' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
          <Image width='50' height='50' src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} alt={comment.name} />
        </li>
      ))}
    </ul>
  )
};
