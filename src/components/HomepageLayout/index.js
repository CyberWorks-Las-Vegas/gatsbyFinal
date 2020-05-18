import React, { useRef } from "react"
import SiteHeader from "../../components/SiteHeader/testHeader"
import { Parallax } from "react-spring/renderprops-addons"
import Hero from "../hero"
import Projects from "../projects"
import Services from "../Services"
import GetStarted from "../GetStarted"
import Banner from "../Banner"

// import SiteFooter from "../components/Footer"

const HomepageLayout = () => {
  const parallax = useRef(null)
  return (
    <React.Fragment>
      <Parallax pages={8} ref={parallax}>
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
            <Projects offset={1} factor={2}>
              <Services />
            </Projects>
          </section>
          <section className="started">
            <GetStarted />
          </section>
        </main>
        <footer className="footer">
          <div></div>
        </footer>
      </Parallax>
    </React.Fragment>
  )
}

export default HomepageLayout
