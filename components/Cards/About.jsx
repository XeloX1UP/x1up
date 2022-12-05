import styles from './about.module.css'
import { IconLink } from './IconLink'
import icons from './Icons'
export const About = () => {
  const {
    lgReact,
    lgJS,
    lgNode,
    lgPython,
    lgHtml5,
    lgCss,
    lgGitHub,
    lgDocker
  } = icons.abouts
  return (
    <div className={`${styles.bg1} ${styles.cnt} my-3 mx-3`}>
      <h2 className={`${styles.title} fs-4`}>
        Soy un desarrollador web con conocimientos en front-end y back-end
      </h2>
      <p>
        Las herramientas más usadas y con las que estoy más cómodo desarrollando
        son:
      </p>
      <div className={`${styles.cntIconLinks}`}>
        <IconLink image={lgReact} />
        <IconLink image={lgJS} />
        <IconLink image={lgNode} />
        <IconLink image={lgPython} />
        <IconLink image={lgHtml5} />
        <IconLink image={lgCss} />
        <IconLink image={lgGitHub} />
        <IconLink image={lgDocker} />
      </div>
    </div>
  )
}
