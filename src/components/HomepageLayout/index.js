import React, { useRef } from "react"
import SiteHeader from "../../components/SiteHeader/testHeader"
import { Layout, Row, Col } from "antd"
import landingImg from "../../images/cw-main-landing2-1.png"
import { Parallax } from "react-spring/renderprops-addons"
import Hero from "../hero"
import Projects from "../projects"

const { Footer } = Layout

const HomepageLayout = ({ children }) => {
  const parallax = useRef(null)
  console.log(parallax)
  return (
    <Layout>
      <Parallax pages={3} ref={parallax}>
        <SiteHeader location={location} />
        <Hero offset={0} factor={1}>
          <Row type="flex" justify="center">
            <colgroup>
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ marginBottom: `2rem` }}
              >
                <Col style={{ marginTop: `1.8rem` }}>
                  <Row type="flex" justify="center" align="middle">
                    <Col>
                      <Row type="flex" justify="start">
                        <div
                          style={{
                            textAlign: `left`,
                            position: `absolute`,
                            marginTop: `3rem`,
                            marginLeft: `3rem`,
                            width: `35vw`,
                            zIndex: `2`,
                          }}
                        >
                          <h1 style={{ color: `reds` }}>
                            Cyberworks Demo build
                          </h1>
                          {/*// eslint-disable-next-line react/jsx-no-comment-textnodes */}
                          <p style={{ fontSize: `14px`, lineHeight: `3` }}>
                            Zombie ipsum brains reversus ab cerebellum viral
                            inferno, brein nam rick mend grimes malum cerveau
                            cerebro. De carne cerebro lumbering animata cervello
                            corpora quaeritis. Summus thalamus
                            {/* eslint-disable-next-line no-irregular-whitespace */}
                            brainssit​​, morbo basal ganglia vel maleficia? De
                            braaaiiiins apocalypsi gorger omero prefrontal
                            cortex undead survivor fornix dictum mauris. Hi
                            brains mindless mortuis limbic
                          </p>
                        </div>
                        <img
                          style={{
                            height: `100vh`,
                            width: `100vw`,
                            zIndex: `1`,
                          }}
                          src={landingImg}
                          alt="cyberworks Logo"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </colgroup>
          </Row>
        </Hero>
        <Projects offset={1} factor={2}>
          <Row
            type="flex"
            justify="space-around"
            style={{
              background: `transparent`,
              padding: `24px`,
            }}
          >
            <Col xs={24} md={18}>
              {children}
            </Col>
          </Row>
        </Projects>
      </Parallax>
      {/* <Row>
        <Footer style={{ textAlign: `center` }}>
          © {new Date().getFullYear()} | Powered by {` `}
          <a href="https://cyberworks.tech">cyberworks</a> and{` `}
        </Footer>
      </Row> */}
    </Layout>
  )
}

export default HomepageLayout
