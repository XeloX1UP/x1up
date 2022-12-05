'use client'
import { useState } from 'react'
import { uploadFiles } from '../../../firebase/config';

const validateProduct = (product) => {
  const message = [];
  const regExp = {
    name: /^[a-zA-ZÀ-ÿ0-9-_\s)()\u00f1\u00d1]{5,80}$/,
    description: /^[a-zA-ZÀ-ÿ0-9-_,.)(\s\u00f1\u00d1]{5,500}$/,
    category: /^[0-9a-zA-Z]{1,25}$/,
    price: /^[0-9]{3,6}$/,
    stock: /^[0-9]{1,2}$/,
  }
  if (!regExp.name.test(product.name))
    message.push({
      message:
        'Nombre debe contener entre 5 a 80 caracteres y simbolos - _ ) (',
    })
  if (!regExp.description.test(product.description))
    message.push({
      message: 'Descripción debe contener entre 5 y 500 caracteres',
    })
  if (!regExp.category.test(product.category))
    message.push({ message: 'Categoría inválida' })
  if (!regExp.price.test(product.price))
    message.push({ message: 'Precio incorrecto' })
  if (!regExp.stock.test(product.stock))
    message.push({ message: 'Stock inválido' })
  if (product.images.length < 1)
    message.push({ message: 'Debes seleccionar al menos una imagen' })

  if (message.length > 0) product.errors = message

  return product;
};
const fetchNewProduct = (product) => {
  return fetch('/api/newproduct', {
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify(product),
  }).then((res) => res.json())
}
export const SubmitButton = () => {
  const [errors, setErrors] = useState([])

  const btnHandler = async (e) => {
    const form = e.target.parentElement.parentElement
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated')
    e.preventDefault();
    const fileInput = document.getElementById('images')
    const product = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      category: document.getElementById('category').value,
      price: document.getElementById('price').value,
      stock: document.getElementById('stock').value,
      images: fileInput.files,
    };

    const validProduct = validateProduct(product)
    if (!validProduct.errors) {
      setErrors([])
      try {
        validProduct.images = await uploadFiles(validProduct.images)
        const taskResult = await fetchNewProduct(validProduct)
        if (taskResult.succes) {
          alert('Producto guardado con éxito.')
          form.reset();
        } else {
          alert(
            'No se ha podido guardar el producto, intente nuevamente más tarde.'
          )
        }
      } catch (error) {
        console.error(error);
        alert('Ha ocurrido un error inesperado. Por favor intente más tarde.')
      }
    } else {
      setErrors(validProduct.errors);
    }
  };
  return (
    <>
      <div className='container'>
        {errors.map(({ message }) => (
          <div
            key={message}
            className='alert alert-danger d-flex align-items-center'
            role='alert'
          >
            <i className='bi bi-exclamation-diamond me-2'></i>
            <div>{message}</div>
          </div>
        ))}
      </div>
      <button
        type='submit'
        className='btn btn-lg btn-success my-3 my-md-0'
        onClick={btnHandler}
      >
        Agregar producto
      </button>
    </>
  )
}
