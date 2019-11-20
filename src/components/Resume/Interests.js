import React from "react"
import ResumeStyle from "./Resume.module.css"

import Data from "../../data/Resume/Interests"

const Interests = () => (
  <section>
    <h4 className={ResumeStyle.section__heading}>Interests</h4>
    <ul>
      {Data.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </section>
)

export default Interests
