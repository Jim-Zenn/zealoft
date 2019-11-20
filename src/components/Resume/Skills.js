import React from "react"
import ResumeStyle from "./Resume.module.css"

import Data from "../../data/Resume/Skills"

const Skills = () => (
  <section>
    <h4 className={ResumeStyle.section__heading}>Skills</h4>
    <ul>
      {Data.map(item => (
        <li>
          <span className="skill-category">{item.category}</span>
          {Array.isArray(item.skills) ? (
            <ul>
              {item.skills.map(skill => (
                <li>{skill.name}</li>
              ))}
            </ul>
          ) : (
            item.skills
          )}
        </li>
      ))}
    </ul>
  </section>
)

export default Skills
