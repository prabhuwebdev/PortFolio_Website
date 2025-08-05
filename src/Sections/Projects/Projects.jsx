import React from 'react'
import project from './Projects.module.css'
// import BuyHive from '../../assets/Shopitty.svg'
import BuyHive from '../../assets/New_BuyHive.svg'
import Inventory from '../../assets/Inventory-Management.svg'
// import Inventory from '../../assets/New_Inventory.svg'

import ProjectCard from '../../Common/ProjectCard'
const Demo='https://myshop-mgod.onrender.com/'

const Projects = () => {
  const handleNavigate = () => {
    window.location.href="https://github.com/prabhuwebdev/E-commerse-Fullstack"; 
    // _blank opens in a new tab
  };
  return (
    <section id='projects' className={project.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={project.projectContainer}>
          <ProjectCard src={BuyHive} h3='BuyHive' link='https://github.com/prabhuwebdev/E-commerse-Fullstack'  />
          <ProjectCard src={Inventory} h3='Inventory' link='https://github.com/prabhuwebdev/Django_RestFrameWork_Backend'/>
        </div>
    </section>
  )
}

export default Projects