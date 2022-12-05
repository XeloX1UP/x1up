import Link from 'next/link'
import { Logo1up } from '../logo1up/Logo1up'
import { IsLogged } from './IsLogged'

const links = [
  {
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Proyectos',
    route: '/about'
  },
  {
    label: 'Tienda',
    route: '/store'
  }
]
export function Navigation () {
  return (
    <nav
      className='navbar navbar-expand-md sticky-md-top'
      style={{ background: '#00abb3' }}
    >
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='collapse navbar-collapse d-md-flex flex-md-row justify-content-md-evenly'
          id='navbarTogglerDemo01'
        >
          <Link className='navbar-brand' href='/' prefetch={false}>
            <Logo1up />
          </Link>
          <ul className='navbar-nav mb-2 mb-lg-0'>
            {links.map((link) => (
              <li key={link.route} className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  href={link.route}
                  prefetch={false}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <IsLogged />
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Buscar'
              aria-label='Buscar'
              disabled
            />
            <button className='btn btn-outline-dark' type='submit' disabled>
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
