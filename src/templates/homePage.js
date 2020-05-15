import React from "react"
import { graphql } from "gatsby"
import HomepageLayout from "../components/HomepageLayout"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  const [zero] = data.allWordpressWpHomeContent.edges
  const {
    content,
    slug,
    title,
    acf: {
      service_img: {
        localFile: {
          name,
          childImageSharp: {
            fluid: { src },
          },
        },
      },
    },
  } = zero.node

  return (
    <React.Fragment>
      <Seo title={`Home`} />
      <HomepageLayout
        servicesContext={{
          dataCotent: { content, slug, title },
          imageContent: { name, src },
        }}
      />
    </React.Fragment>
  )
}

export default IndexPage

export const homeQuery = graphql`
  query homeQuery {
    allWordpressWpHomeContent {
      edges {
        node {
          acf {
            service_img {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 512) {
                    src
                  }
                }
                name
              }
            }
          }
          content
          slug
          title
        }
      }
    }
  }
`
