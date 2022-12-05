'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function IsLogged () {
  const [profile, setProfile] = useState({})
  const fetchLogout = async () => {
    const lgd = await fetch('/api/logout', {
      credentials: 'same-origin',
      method: 'GET'
    }).then((res) => res.json)
    if (!lgd.logged) location.href = '/'
  }
  useEffect(() => {
    const fetchLogged = async () => {
      const response = await fetch('/api/profile', {
        credentials: 'same-origin',
        method: 'GET'
      }).then((res) => res.json())
      setProfile(response)
    }
    fetchLogged()
  }, [])
  if (profile.logged) {
    if (profile.role === 10) {
      return (
        <>
          <li className='nav-item'>
            <Link href='/administrator' className='nav-link active' prefetch={false}>
              Administrar tienda
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              prefetch={false}
              href='#'
              onClick={fetchLogout}
              className='nav-link active'
            >
              Cerrar sesion
            </Link>
          </li>
        </>
      )
    }
    return (
      <li className='nav-item'>
        <Link
          prefetch={false}
          href='#'
          onClick={fetchLogout}
          className='nav-link active'
        >
          Cerrar sesion
        </Link>
      </li>
    )
  } else {
    return (
      <>
        <li className='nav-item'>
          <Link href='/users/login' className='nav-link active' prefetch={false}>
            Iniciar sesion
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/users/newuser' className='nav-link active' prefetch={false}>
            Registrarse
          </Link>
        </li>
      </>
    )
  }
}
