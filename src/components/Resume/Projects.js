import React from "react"
import ResumeStyle from "./Resume.module.css"

import projectsJson from "../../data/Resume/Projects"

const Projects = () => (
  <section>
    <h4 className={ResumeStyle.section__heading}>Projects</h4>
    <ul>
      {projectsJson.map(item => (
        <li>
          <h5 className={ResumeStyle.item__heading}>
            <span className={ResumeStyle.item__field}>{item.name}</span>
            <span className={ResumeStyle.item__field}>{item.skills}</span>
            <span className={ResumeStyle.item__field}>{item.year}</span>
          </h5>
          <ul className={ResumeStyle.item__descriptions}>
            {item.descriptions.map(desc => (
              <li className={ResumeStyle.item__description}>{desc}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
)

export default Projects
