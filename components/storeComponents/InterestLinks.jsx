import Link from 'next/link'
import { shadow } from './interestLinks.module.css'

const links = [
  {
    label: 'Interés 1',
    route: '#'
  },
  {
    label: 'Interés 2',
    route: '#'
  },
  {
    label: 'Interés 3',
    route: '#'
  }
]
export const InterestLinks = () => {
  return (
    <div className='d-flex flex-row align-items-center justify-content-between my-5'>
      {links.map(({ label, route }) => (
        <Link
          key={route}
          href={route}
          className={`text-decoration-none text-success fs-5 border rounded-pill px-4 py-2 ${shadow}`}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
