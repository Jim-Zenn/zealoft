import React from "react"
import { Link } from "gatsby"

const logoStyle = {
  fontFamily: `Museo Sans`,
  fontSize: `1.75rem`,
  fontWeight: `500`,
  color: `#000`,
}

const Logo = () => (
  <Link
    to="/"
    style={{
      textDecoration: `none`,
      fontFamily: `var(--logo-font)`,
      fontWeight: 500,
    }}
  >
    <span style={logoStyle}>
      Zea<u>l</u>oft
    </span>
  </Link>
)

export default Logo
