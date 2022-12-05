import Image from 'next/image'
import Link from 'next/link'
import img from '../../images/banner.png'
export const MainStoreBanner = () => {
  return (
    <Link href='/promotions'>
      <Image
        src={img}
        fill
        alt='promocion imagen banner'
        style={{ objectFit: 'contain' }}
        className=''
      />
    </Link>
  )
}
