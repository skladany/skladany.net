import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <a href="mailto:steve@skladany.net" class="text-link me">
        steve@skladany.net
      </a>
    </h1>
    <hr />
    <h2>
      Full Stack Developer and Designer currently
      <br /> working as a Frontend&nbsp;Engineer at
      <br />
      <a href="https://aws.amazon.com/" target="_blank" class="text-link">
        Amazon Web Services (AWS)
      </a>
    </h2>
    <hr />
    <ul class="social-links">
      <li>
        <a
          href="https://www.linkedin.com/in/steveskladany/"
          target="_blank"
          class="icon-linkedin"
        >
          <i>LinkedIn</i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/skladany"
          target="_blank"
          class="icon-github"
        >
          <i>Github</i>
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
