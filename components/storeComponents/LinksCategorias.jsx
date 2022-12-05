'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export const LinksCategorias = () => {
  const [list, setList] = useState([])
  const categories = async () => {
    const result = await fetch('/api/categorylist').then((res) =>
      res.json()
    )
    setList(result)
  }
  useEffect(() => {
    categories()
  }, [])

  return (
    <>
      <h3>Categorías</h3>
      <div className='mt-4'>
        {list.map(({ name, _id }) => (
          <Link
            href={`/store/categories/${_id}`}
            key={_id}
            className='text-decoration-none fs-5 text-success'
            prefetch={false}
          >
            <p className='border m-0 py-3 ps-2'>
              <i className='bi bi-caret-right-fill me-3' />
              {name}
            </p>
          </Link>
        ))}
      </div>
    </>
  )
}
