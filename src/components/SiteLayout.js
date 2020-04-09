import React, { useRef } from "react"
import PropTypes from "prop-types"
import Header from "./SiteHeader"
import { Layout, Row, Col } from "antd"
import { Parallax } from "react-spring/renderprops-addons"
import "./style.css"

const { Content, Footer } = Layout

const SiteLayout = ({ children, location }) => {
  let parallax = useRef(null)
  return (
    <Layout>
      <Parallax pages={5} ref={ref => (parallax = ref)}>
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
          © {new Date().getFullYear()} | Powered by
      {` `}
          <a href="https://cyberworks.tech">cyberworks</a> and{` `}
        </Footer>
      </Parallax>
    </Layout>
  )
}

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
