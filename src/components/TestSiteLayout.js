import React from "react"
import PropTypes from "prop-types"
import Header from "./SiteHeader/testHeader"
import { Layout, Row, Col } from "antd"

import "./style.css"

const { Content, Footer } = Layout

const SiteLayout = ({ children, location }) => (
  <Layout>
    <Header location={location} />
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
    <Footer style={{ textAlign: `center` }}>
      © {new Date().getFullYear()} | Powered by {` `}
      <a href="https://cyberworks.tech">cyberworks</a> and{` `}
    </Footer>
  </Layout>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
