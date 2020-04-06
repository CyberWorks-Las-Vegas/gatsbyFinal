import React from "react"
import SiteHeader from "../../components/SiteHeader"
import { Layout, Row, Col, Button } from "antd"
import wpgraphqlLogo from "../../images/wpgraphql-logo.png"
// import gatsbyLogo from "../../images/gatsby-logo.png"

const { Content } = Layout

const HomepageLayout = ({ pageNumber, location, children }) => (
  <Layout>
    <SiteHeader location={location} />
    {!pageNumber ? (
      <Row
        type="flex"
        justify="center"
        style={{ padding: `75px 75px 50px 75px` }}
      >
        <Col xs={24} md={14} style={{ textAlign: `center` }}>
          <h1>Cyberworks Demo build</h1>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ marginBottom: `2rem` }}
          >
            <Col xs={24} lg={12}>
              <Row type="flex" justify="center" align="middle">
                {/* <Col xs={10}>
                  <Row type="flex" justify="end">
                    <img
                      style={{ height: `100px`, width: `100px` }}
                      src={gatsbyLogo}
                      alt="Gatsby Logo"
                    />
                  </Row>
                </Col> */}
                <Col xs={4}>
                  <span style={{ fontSize: `3rem`, padding: `10px` }}>+</span>
                </Col>
                <Col xs={10}>
                  <Row type="flex" justify="start">
                    <img
                      style={{ height: `100px`, width: `100px` }}
                      src={wpgraphqlLogo}
                      alt="WPGraphQL Logo"
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    ) : null}
    <Row
      type="flex"
      justify="space-around"
      style={{
        background: `transparent`,
        padding: `24px`,
      }}
    >
      <Col xs={24} md={18}>
        <Content
          style={{
            minHeight: `calc(100vh - 134px)`,
            padding: `50px 50px`,
            background: `#ffffff`,
          }}
        >
          {children}
        </Content>
      </Col>
    </Row>
  </Layout>
)

export default HomepageLayout
