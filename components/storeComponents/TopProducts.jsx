'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { shadow } from './topProducts.module.css'

export const TopProducts = () => {
  const [productList, setProductList] = useState([])
  const [firstProduct, setFirstProduct] = useState([])
  const fetchTopProducts = async () => {
    const result = await fetch('/api/gettopproducts').then((res) => res.json())
    setFirstProduct(result.shift())
    setProductList(result)
  }
  useEffect(() => {
    fetchTopProducts()
  }, [])
  if (firstProduct.length < 1) return null
  return (
    <div
      id='productsCarrousel'
      className='carousel slide carousel-fade'
      data-bs-ride='carousel'
    >
      <div className={`carousel-inner ${shadow}`}>
        <div className='carousel-item active'>
          <div className='card bg-dark w-100'>
            <div
              className='container-fluid position-relative'
              style={{ height: '200px' }}
            >
              <Image
                src={firstProduct.images[0].url}
                className='card-img-top'
                alt={firstProduct.name}
                fill
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>{firstProduct.name}</h5>
              <p className='card-text'>{firstProduct.description}</p>
              <Link
                href={`/store/categories/${firstProduct.category}/${firstProduct._id}`}
                className='btn btn-primary'
                prefetch={false}
              >
                Ir
              </Link>
            </div>
          </div>
        </div>

        {productList.map(({ _id, name, description, category, images }) => (
          <div key={_id} className='carousel-item'>
            <div className='card bg-dark' style={{ width: '100%' }}>
              <div
                className='container-fluid position-relative'
                style={{ height: '200px' }}
              >
                <Image
                  src={images[0].url}
                  className='card-img-top'
                  alt={name}
                  fill
                  objectFit='cover'
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{description}</p>
                <Link
                  href={`/store/categories/${category}/${_id}`}
                  className='btn btn-primary'
                  prefetch={false}
                >
                  Ir
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#productsCarrousel'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#productsCarrousel'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
