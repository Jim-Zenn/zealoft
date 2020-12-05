import PropTypes from "prop-types"
import React from "react"

import Logo from "./Logo"
import Navigation from "./Navigation"

import menuJson from "../data/menu"

const headerStyle = {
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  height: `var(--header-height)`,
  margin: `0 auto`,
  padding: `0 1.875rem`,
}

const Header = ({ title }) => (
  <header style={headerStyle}>
    <Logo />
    <Navigation items={menuJson} current={title} />
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
