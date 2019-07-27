import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <span className="logo">
      <Link to="/">
        <Logo />
      </Link>
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
