'use client'
import { useState } from 'react'

export default function LikeButton () {
  const [like, setLike] = useState(false)
  return (
    <button onClick={() => setLike(!like)}>
      {!like ? '<3' : '</3'}
    </button>
  )
};
