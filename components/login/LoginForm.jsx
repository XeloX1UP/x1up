import { LoginInput } from './LoginInputTxt'
import { LoginButton } from './LoginButton'
import Link from 'next/link'
import { form } from './Login.module.css'

export const LoginForm = () => {
  return (
    <form
      className={`d-flex flex-column justify-content-center align-items-center w-100 mx-auto text-light my-5 py-3 ${form}`}
      method='POST'
      action='/api/newuser'
    >
      <h2>Iniciar sesion</h2>
      <LoginInput placeholder='Usuario' id='email' type='email' />
      <LoginInput placeholder='Contraseña' id='password' type='password' />
      <Link href='/users/newuser'>¿No tienes cuenta? Registrate aqui.</Link>
      <Link href='/users/passforggot'>¿Olvidó su contraseña?</Link>
      <LoginButton />
    </form>
  )
}
