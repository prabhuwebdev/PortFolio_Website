import React from 'react'
import styles from './Hero.module.css'
// import sun from '../../assets/bxs-sun-icon.svg'
import sun from '../../assets/real_sun.jpg'
import Github from '../../assets/github-light.svg'
import Instagram from '../../assets/lucide-instagram-icon.svg'
import Linkedin from '../../assets/devicon-plain-linkedin-icon.svg'
import CV from '../../assets/Prabhu_Resume.pdf'
import {useTheme,} from '../../Common/ThemeContext'
import DarkGithub from '../../assets/icons8-github.svg'
import DarkLinkedin from '../../assets/linkedin-light.svg'
import DarkInstagram from '../../assets/light-instagram.svg'
// import Moon from '../../assets/moon_new.svg'
import Moon from '../../assets/full-moon_6635649.png'
// import UserImage from '../../assets/user_image.jpg'
import UserImage from '../../assets/chatgpt_image.png'






function Hero() {
  const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light'? sun : Moon;
    const themeGithub= theme ==='light'? Github : DarkGithub
    const ThemeLinkedin = theme === 'light'? Linkedin : DarkLinkedin
    const themeInstagram = theme === 'light' ? Instagram :DarkInstagram

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={UserImage}
          className={styles.hero}
          alt="Profile picture of Prabhu"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Prabhu
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://github.com/prabhuwebdev" target="_blank">
            <img src={themeGithub} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/prabhu-h-ab855a280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src={ThemeLinkedin} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about developing full-stack web applications using Python and React.js, focusing on clean code, performance, and user friendly interfaces.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;