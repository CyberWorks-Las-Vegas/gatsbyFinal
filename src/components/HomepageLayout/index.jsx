import React, { useRef } from "react"
import { Parallax } from "react-spring/renderprops-addons"
import BannerWrapper from "../ParallaxWrapper/BannerWrapper"
import ServicesWrapper from "../ParallaxWrapper/ServicesWrapper"
import StartedWrapper from "../ParallaxWrapper/StartedWrapper"
import SiteHeader from "./Sections/Header"
import Banner from "./Sections/Banner"
import Services from "./Sections/Services"
import Started from "./Sections/Started"

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
            <BannerWrapper offset={0} factor={1}>
              <Banner />
            </BannerWrapper>
          </section>
          <section id="services">
            <ServicesWrapper offset={1} factor={2}>
              <Services />
            </ServicesWrapper>
          </section>
          <section className="started">
            <StartedWrapper offset={3.6} factor={3}>
              <Started />
            </StartedWrapper>
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
