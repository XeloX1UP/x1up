import { EmailButton } from '../contacto/EmailButton'
import styles from './contact.module.css'
import { IconLink } from './IconLink'
import icons from './Icons'
export const Contact = () => {
  const { lgFacebook, lgLinkedIn, lgGitHub } = icons.contacts
  const data = {
    facebook: 'https://www.facebook.com/eduardo.XeloX1UP',
    linkedIn: 'https://www.linkedin.com/in/eduardo-moncada-lillo-25b336225/',
    gitHub: 'https://github.com/XeloX1UP'
  }
  return (
    <div className={`${styles.bg} ${styles.cnt} my-3 mx-3`}>
      <div className={styles.cnt}>
        <h3>Redes sociales</h3>
        <div className={styles.cntIconLinks}>
          <IconLink url={data.facebook} image={lgFacebook} />
          <IconLink url={data.linkedIn} image={lgLinkedIn} />
          <IconLink url={data.gitHub} image={lgGitHub} />
        </div>
      </div>
      <div className={styles.cnt}>
        <h3>Envíame un correo</h3>
        <EmailButton />
      </div>
    </div>
  )
}
