// import React from 'react'
import styles from './Skill.module.css'
import CheckMark from  '../../assets/check-mark-svgrepo-com.svg'





import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
 

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