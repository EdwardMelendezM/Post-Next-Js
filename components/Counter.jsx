'use client'

import { useState } from 'react'

export default function Counter () {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <p>Count {counter} :cat </p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
};
