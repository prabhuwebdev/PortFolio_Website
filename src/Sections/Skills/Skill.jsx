// import React from 'react'
import styles from './Skill.module.css'
import CheckMark from  '../../assets/check-mark-svgrepo-com.svg'
// import SkillList from '../../Common/SkillList'


// const Skill = () => {
//   return (
//     <section id='skills' className={styles.containers}>
//         <h1 className='sectiionTitle'>Skills</h1>
        // <div className={styles.skillList}>
        //     <SkillList src={CheckMark} skill="HTML" />
        //     <SkillList src={CheckMark} skill="CSS" />
        //     <SkillList src={CheckMark} skill="Bootstrap" />
        //     <SkillList src={CheckMark} skill="JavaScript" />
        //     <SkillList src={CheckMark} skill="React.Js" />
        // </div>
        // <hr />
        // <div className={styles.skillList}>
        //     <SkillList src={CheckMark} skill="TailWind CSS" />
        //     <SkillList src={CheckMark} skill="Python" />
        //     <SkillList src={CheckMark} skill="Django" />
        //     <SkillList src={CheckMark} skill="REST API" />

        // </div>
        // <hr />
        // <div className={styles.skillList}>
        //     <SkillList src={CheckMark} skill="Node" />
        //     <SkillList src={CheckMark} skill="MySQL" />
        //     <SkillList src={CheckMark} skill="Git & GitHub" />
        //     <SkillList src={CheckMark} skill="PostgreSQL" />
        //     <SkillList src={CheckMark} skill="Oracle SQL" />
        // </div>
        // <hr />
//     </section>
//   )
// }

// export default Skill


// import styles from './SkillsStyles.module.css';
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  // const { theme } = useTheme();
  // const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
            <SkillList src={CheckMark} skill="HTML" />
            <SkillList src={CheckMark} skill="CSS" />
            <SkillList src={CheckMark} skill="Bootstrap" />
            <SkillList src={CheckMark} skill="JavaScript" />
            <SkillList src={CheckMark} skill="React.Js" />
        </div>
        <hr />
      <div className={styles.skillList}>
            <SkillList src={CheckMark} skill="TailWind CSS" />
            <SkillList src={CheckMark} skill="Python" />
            <SkillList src={CheckMark} skill="Django" />
            <SkillList src={CheckMark} skill="REST API" />

        </div>
        <hr />
      <div className={styles.skillList}>
            <SkillList src={CheckMark} skill="Node" />
            <SkillList src={CheckMark} skill="MySQL" />
            <SkillList src={CheckMark} skill="Git & GitHub" />
            <SkillList src={CheckMark} skill="PostgreSQL" />
            <SkillList src={CheckMark} skill="Oracle SQL" />
        </div>
    </section>
  );
}

export default Skills;