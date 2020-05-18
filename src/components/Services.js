import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import VisibilitySensor from "react-visibility-sensor"
import { Spring, Trail, animated } from "react-spring/renderprops"
import { Row, Col } from "antd"
import "../styles/less/services.less"

const Services = () => {
  const data = useStaticQuery(
    graphql`
      query Home_Services_Query {
        allWordpressWpHomeContent(
          filter: { tags: { elemMatch: { name: { eq: "services" } } } }
        ) {
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
  )

  const context = data.allWordpressWpHomeContent.edges

  const child = (context, isVisible) =>
    context.map(inx => {
      const { node } = inx
      const {
        content,
        slug,
        title,
        acf: {
          service_img: {
            localFile: {
              childImageSharp: {
                fluid: { src },
              },
            },
          },
        },
      } = node
      const items = [
        // eslint-disable-next-line react/jsx-key
        <h3>{title}</h3>,
        // eslint-disable-next-line react/jsx-key
        <i className="line" />,
        // eslint-disable-next-line react/jsx-key
        <div dangerouslySetInnerHTML={{ __html: content }} />,
      ]
      return (
        <React.Fragment key={slug}>
          <Col span={8} className="col">
            <div className="content-wrapper home-hover">
              <img className="image" src={src} />
              <div className="content-wrapper-services">
                <Trail
                  native
                  delay={300}
                  initial={null}
                  items={items}
                  from={{ opacity: 0, x: -400 }}
                  to={{
                    opacity: isVisible ? 1 : 0.25,
                    x: isVisible ? 0 : -400,
                  }}
                >
                  {item => ({ x, opacity }) => (
                    <animated.div
                      className="box"
                      style={{
                        opacity,
                        transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                      }}
                    >
                      {item}
                    </animated.div>
                  )}
                </Trail>
              </div>
            </div>
          </Col>
        </React.Fragment>
      )
    })
  return (
    <React.Fragment>
      <article className="home-serve-wrapper">
        <Row type="flex" justify="center" className="home-layout">
          <VisibilitySensor partialVisibility={true} delayedCall={true}>
            {({ isVisible }) => (
              <Spring
                delay={300}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? `translateX(0)` : `translateX(400px)`,
                }}
              >
                {props => (
                  <React.Fragment>
                    <div style={{ ...props }} className="home-serve">
                      <h3 className="main-title">Services</h3>
                      <i className="line" />
                      {child(context, isVisible)}
                    </div>
                  </React.Fragment>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </Row>
      </article>
    </React.Fragment>
  )
}

export default Services
