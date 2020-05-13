import React, { Component } from "react"
import { graphql } from "gatsby"
import { Row } from "antd"
import Services from "../components/Services"
import HomepageLayout from "../components/HomepageLayout"
import Seo from "../components/Seo"

class IndexPage extends Component {
  render() {
    console.log(`in homepage`, { context: this.props })
    return (
      <React.Fragment>
        <Seo title={`Home`} />
        <HomepageLayout>
          <Row type="flex">
            <Services />
          </Row>
        </HomepageLayout>
      </React.Fragment>
    )
  }
}

export default IndexPage

export const contentQuery = graphql`
  query contentQuery {
    allWordpressWpHomeContent {
      nodes {
        slug
        path
        title
        content
        id
      }
    }
  }
`
