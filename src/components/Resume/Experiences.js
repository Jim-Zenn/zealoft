import React from "react"
import ResumeStyle from "./Resume.module.css"

import experiencesJson from "../../data/Resume/Experiences"

const Experiences = () => (
  <section>
    <h4 className={ResumeStyle.section__heading}>Experiences</h4>
    <ul>
      {experiencesJson.map(item => (
        <li>
          <h5 className={ResumeStyle.item__heading}>
            <span className={ResumeStyle.item__field}>
              <span>{item.employer}</span>
              <span>{item.location}</span>
            </span>
            <span className={ResumeStyle.item__field}>{item.title}</span>
            <span className={ResumeStyle.item__field}>
              {item.from} - {item.to}
            </span>
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

export default Experiences
