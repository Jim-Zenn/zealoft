import React from "react"
import ResumeStyle from "./Resume.module.css"

import Data from "../../data/Resume/Education"

const Education = () => (
  <section>
    <h4 className={ResumeStyle.section__heading}>Education</h4>
    <ul>
      {Data.map(item => (
        <li>
          <h5 className={ResumeStyle.item__heading}>
            <span className={ResumeStyle.item__field}>{item.college}</span>
            <span className={ResumeStyle.item__field}>{item.major}</span>
            <span>
              {item.from} - {item.to}
            </span>
          </h5>
          <ul>
            {item.descriptions.map(desc => (
              <li>{desc}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
)

export default Education
