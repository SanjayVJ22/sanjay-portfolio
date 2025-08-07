import styles from './HeroStyles.module.css'
import heroImg from '../../assets/photo circle.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import githubIconLight from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import CV from '../../assets/SANJAY VALIYAVEETTIL JANARDHANAN CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ?sun:moon
    const linkedInIcon = theme === 'light' ?linkedInLight:linkedInDark
    const githubIcon = theme === 'light' ?githubIconLight:githubIconDark
    

  return (
    <>
        <section id = 'hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className ={styles.hero}
            src={heroImg} 
            alt="Profile picture of Sanjay VJ"/>
            <img
            onClick={toggleTheme} 
            className={styles.colorMode}
            src={themeIcon} 
            alt='Color mode icon'/>
        </div>
        <div className={styles.info}>
            <h1>Sanjay <br /> VJ </h1>
            <h2>JAVA Developer</h2>      
            <span>
                <a href="https://www.linkedin.com/in/sanjay-valiyaveettil-janardhanan-8b374b297/" target='_blank'>
                    <img src={linkedInIcon}></img>
                </a>
                <a href="https://github.com/SanjayVJ22" target='_blank'>
                    <img src={githubIcon}></img>
                </a>
            </span> 
            <p className={styles.description}> Aspiring Java developer passionate about building robust backend applications and continuously learning new technologies</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
        </section>
    </>
  )
}

export default Hero