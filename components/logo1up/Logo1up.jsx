import logo from '../../images/logoNav.png'
import Image from 'next/image'
export function Logo1up () {
  return (
    <Image
      src={logo}
      priority
      placeholder='blur'
      alt='Logo X1UP'
      width={90}
      height={90}
      className='mt-2 mt-md-0'
    />
  )
}
