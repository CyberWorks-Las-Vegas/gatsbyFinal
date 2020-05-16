import React, { useRef } from "react"
import SiteHeader from "../../components/SiteHeader/testHeader"
import { Parallax } from "react-spring/renderprops-addons"
import Hero from "../hero"
import Projects from "../projects"
import Services from "../Services"
import Banner from "../Banner"

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
          <section id="home">
            <Hero offset={0} factor={1}>
              <Banner style={{ position: `absolute` }} />
            </Hero>
          </section>
          <section id="services">
            <Projects offset={1} factor={2} />
            <Services context={props.servicesContext} />
          </section>
        </main>
      </Parallax>
    </React.Fragment>
  )
}

export default HomepageLayout
