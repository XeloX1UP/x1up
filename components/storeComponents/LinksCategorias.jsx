import Link from 'next/link'

const categories = () => {
  return fetch(`${process.env.BASE_URL}/api/categorylist`).then((res) =>
    res.json()
  )
}
export const LinksCategorias = async () => {
  const list = await categories()

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
