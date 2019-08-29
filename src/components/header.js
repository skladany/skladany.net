import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle, props }) => (
  <header>
    <span className="logo">
      <Link to="/">
        <Logo />
      </Link>
    </span>
    {JSON.stringify(props)}
    <nav>
      <ul>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Thoughts</a>
        </li>
        <li>
          <a>Learning</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
