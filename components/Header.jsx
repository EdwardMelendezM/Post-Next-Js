import Link from 'next/link'
import styles from './Header.module.css'
const rutas = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Post',
    route: '/post'
  }
]

export default function Navigator () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigator}>
          {rutas.map(({ label, route }) => (
            <li key={route} className={styles.item_li}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
};
