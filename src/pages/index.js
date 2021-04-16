import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  <div class="">

    <SEO title="Home" />
    <h1>Hi people</h1>
   
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    </div>
}

export default IndexPage
