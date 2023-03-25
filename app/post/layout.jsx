import Counter from '@/components/Counter'

export default function PostLayout ({ children }) {
  return (
    <div>
      <Counter />
      <h1>Este es el layout de los post</h1>
      {children}
    </div>
  )
};
