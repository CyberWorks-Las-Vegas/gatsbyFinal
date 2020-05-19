import React from "react"

import HomepageLayout from "../components/HomepageLayout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <React.Fragment>
    <Seo title={`Home`} />
    <HomepageLayout />
  </React.Fragment>
)

export default IndexPage
