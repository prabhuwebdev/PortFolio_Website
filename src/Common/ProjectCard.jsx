import React from 'react'

const ProjectCard = ({src,h3,link,p}) => {
  return (
    <>
        <a href='https://github.com/prabhuwebdev/E-commerse-Fullstack' target='_blank'>
          <img src={src} style={{Height:"200px",Width:"200px",borderRadius:"20px"}}/>
          <h3>{h3}</h3>
          <p>{p}</p>
        </a>
    </>
  )
}

export default ProjectCard