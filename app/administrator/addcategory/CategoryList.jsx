'use client'
import { useEffect, useState } from 'react'

export default function CategoryList() {
  const [list, setList] = useState([])
  const getCategoryList = async () => {
    const response = await fetch('/api/categorylist', {
      credentials: "same-origin",
      method: "GET"
    }).then((res) => res.json())
    setList(response)
  }
  useEffect(() => {
    getCategoryList()
  }, [])
  if (!list.length > 0) {
    return (
      <div>
        <h1>No hay categorias para mostrar</h1>
      </div>
    )
  } else {
    return (
      <div>
        <div className="card border-primary">
          <ul className="list-group list-group-flush">
            {list.map(({ _id, name }) => (
              <li key={_id} className="list-group-item d-flex">
                <p className="my-0 me-auto">{name}</p>
                <button className="btn bg-none p-0">
                  <i className="bi bi-pencil-fill text-success me-2"></i>
                </button>
                <button className="btn bg-none p-0">
                  <i className="bi bi-x-circle-fill text-danger"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
