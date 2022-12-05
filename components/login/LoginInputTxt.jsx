'use client'
import { useState } from 'react'
import styles from './Login.module.css'

export const LoginInput = ({ placeholder, id, type }) => {
  const [focused, setFocused] = useState(false)
  const [name, setName] = useState('')
  const tooglePlaceholder = () => {
    if (name.length > 0) {
      setFocused(true)
    } else {
      setFocused(!focused)
    }
  }
  const upName = (e) => {
    setName(e.target.value)
    tooglePlaceholder()
  }
  return (
    <fieldset className='d-flex flex-column justify-content-center mx-3 w-100 px-3'>
      <legend>
        <label
          htmlFor={id}
          className={
            focused ? `${styles.title} ${styles.active}` : styles.title
          }
        >
          {placeholder}
        </label>
      </legend>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        onFocus={tooglePlaceholder}
        onBlur={tooglePlaceholder}
        onKeyUp={upName}
        onChange={upName}
      />
    </fieldset>
  )
}
