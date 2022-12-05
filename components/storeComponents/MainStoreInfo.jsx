import Link from 'next/link'
import { shadow } from './mainStoreInfo.module.css'
export const MainStoreInfo = () => {
  const mail = 'monk.da15@gmail.com'
  return (
    <div className={`mt-3 py-3 bg-dark ${shadow}`}>
      <h3 className='text-center'>Importante</h3>
      <div className='px-5 my-4'>
        <ul>
          <li>
            <p>Ventas a todo Chile</p>
          </li>
          <li>
            <p>
              Puedes realizar todas tus consultas al correo{' '}
              <Link
                href={`mailto:${mail}?Subject=%20Quisiera%20contactarme%20contigo!`}
              >
                {mail}
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
