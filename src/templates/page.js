import React, { useRef } from "react"
import { graphql } from "gatsby"
import { Row, Col, Divider } from "antd"
import SiteLayout from "../components/SiteLayout"
import CategoriesWidget from "../components/CategoriesWidget"
import RecentCommentsWidget from "../components/RecentCommentsWidget"
import RecentPostsWidget from "../components/RecentPostsWidget"
import Seo from "../components/Seo"
import Hero from "../components/hero"
import { Parallax } from "react-spring/renderprops-addons"

const Page = props => {
  const {
    location,
    data: {
      wpgraphql: { page },
    },
  } = props
  const { title, content } = page
  const parallax = useRef(null)
  console.log(parallax);
  return (
    <SiteLayout location={location}>
      <Seo title={`${page.title}`} />
      <Parallax pages={5} ref={parallax}>
        <Row type="flex" gutter={24}>
          <Col xs={24} md={16}>
            <h1>{title}</h1>
            <Divider />
            <Hero offset={0} factor={1} />
            <Row type="flex" justify="space-around" gutter={24}>
              <Col xs={24}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={8}>
            <RecentPostsWidget />
            <CategoriesWidget />
            <RecentCommentsWidget />
          </Col>
        </Row>
      </Parallax>
    </SiteLayout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
