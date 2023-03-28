
export default function PostLayout ({ children }) {
  return (
    <div>
      <marquee style={{ color: 'purple', background: '#fff' }}>Home &bull;</marquee>
      {children}
    </div>
  )
};
