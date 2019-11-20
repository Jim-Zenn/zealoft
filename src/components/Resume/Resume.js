import React from "react"
import Education from "./Education"
import Skills from "./Skills"
import Experiences from "./Experiences"
import Projects from "./Projects"
import Interests from "./Interests"

const Resume = () => {
  return (
    <div>
      <Education></Education>
      <Skills></Skills>
      <Experiences></Experiences>
      <Projects></Projects>
      <Interests></Interests>
    </div>
  )
}

Resume.propTypes = {}

export default Resume
