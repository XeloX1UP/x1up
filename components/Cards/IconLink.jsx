import Image from 'next/image'
import Link from 'next/link'

export const IconLink = ({ url, image }) => {
  if (url) {
    return (
      <Link href={url} target='_blank' rel='noreferrer'>
        <Image alt='icon' src={image} width={40} height={40} />
      </Link>
    )
  }
  return <Image alt='icon' src={image} width={40} height={40} />
}
