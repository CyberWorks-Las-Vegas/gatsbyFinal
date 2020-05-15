import React, { useRef } from "react"
import SiteHeader from "../../components/SiteHeader/testHeader"
import { Row, Col } from "antd"
import landingImg from "../../images/cw-main-landing2-1.png"
import { Parallax } from "react-spring/renderprops-addons"
import Hero from "../hero"
import Projects from "../projects"
// import Content from "../../elements/content"
import Services from "../Services"
import Banner from "../Banner"
import { ParallaxLayer } from "react-spring/renderprops-addons"
import { css } from "theme-ui"
// import SiteFooter from "../components/Footer"

const HomepageLayout = props => {
  const parallax = useRef(null)
  return (
    <React.Fragment>
      <Parallax pages={3} ref={parallax}>
        <header>
          <SiteHeader />
        </header>
        <main>
          <section>
            <Hero offset={0} factor={1} style={{ zIndex: 1 }}>
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
                        <article
                          style={{
                            textAlign: `left`,
                            position: `absolute`,
                            marginTop: `9rem`,
                            marginLeft: `20rem`,
                            width: `35vw`,
                            zIndex: `2`,
                          }}
                        >
                          <Banner />
                        </article>
                        <img
                          style={{
                            minWidth: `100vw`,
                            minHeight: `49.5vmax`,
                            height: `100vh`,
                            width: `100vw`,
                            zIndex: `1`,
                            overflow: `hidden`,
                          }}
                          src={landingImg}
                          alt="cyberworks Logo"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Hero>
          </section>
          <section
            style={{
              position: `relative`,
            }}
          >
            <Projects offset={1} factor={2} />
            <ParallaxLayer
              css={css({
                padding: [3, 4, 4, 5],
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`,
              })}
              offset={1.2}
              factor={2}
            >
              <Services context={props.servicesContext} />
            </ParallaxLayer>
          </section>
        </main>
      </Parallax>
    </React.Fragment>
  )
}

export default HomepageLayout
