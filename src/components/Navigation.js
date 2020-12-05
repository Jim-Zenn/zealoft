import React from "react"
import { Link } from "gatsby"

import Menu, { MenuItem } from "rc-menu"

const Navigation = ({ items, current }) => {
  return (
    <Menu mode="inline" selectedKeys={[current]}>
      {items.map((item, index) => {
        return (
          <MenuItem
            key={item.id}
            style={{
              display: `inline`,
              fontFamily: `Museo Sans, sans-serif`,
            }}
          >
            <Link
              to={item.to}
              style={{
                color: `rgba(0,0,0,.54)`,
                textDecoration: `None`,
                fontSize: `.9rem`,
              }}
            >
              {item.name}
            </Link>
          </MenuItem>
        )
      })}
    </Menu>
  )
}

export default Navigation
