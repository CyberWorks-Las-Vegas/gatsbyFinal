import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import VisibilitySensor from "react-visibility-sensor"
import { animated, Spring, Trail } from "react-spring/renderprops"
import { ParallaxLayer } from "react-spring/renderprops-addons"
import { Row, Col, Icon, Button } from "antd"
import "../styles/less/started.less"

const GetStarted = () => {
  const data = useStaticQuery(
    graphql`
      query Home_Started_Query {
        allWordpressWpHomeContent(
          filter: { tags: { elemMatch: { name: { eq: "started" } } } }
        ) {
          edges {
            node {
              acf {
                started_img {
                  localFile {
                    childImageSharp {
                      fluid {
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

  const child = (context, isVisible) => {
    const filteredArray = []

    context.forEach(inx => {
      const { node } = inx
      let index = parseInt(node.slug)
      let newNode = Object.assign({ slug: index }, node)
      filteredArray[index] = newNode
    })

    return filteredArray.map(node => {
      const {
        content,
        slug,
        title,
        acf: {
          started_img: {
            localFile: {
              childImageSharp: {
                fluid: { src },
              },
            },
          },
        },
      } = node

      const imageStyle = {
        background: `url(${src}) no-repeat ${
          // eslint-disable-next-line quotes
          slug % 2 === 1 ? "right" : "left"
        } / 841px`,
        height: `511px`,
        top: `50%`,
        marginTop: `-256px`,
      }

      const items = [
        // eslint-disable-next-line react/jsx-key
        <h2>{title}</h2>,
        // eslint-disable-next-line react/jsx-key
        <div
          style={{ maxWidth: 310 }}
          dangerouslySetInnerHTML={{ __html: content }}
        />,
        // eslint-disable-next-line react/jsx-key
        <div key="button">
          <a>
            <Button type="primary" size="large">
              Step 1
              <Icon type="right" />
            </Button>
          </a>
        </div>,
      ]
      return (
        <React.Fragment key={slug}>
          <div className="content-wrapper-started page">
            <Col span={8} style={imageStyle} className="image-wrapper-started">
              <Trail
                native
                delay={300}
                initial={null}
                items={items}
                from={{ opacity: 0, x: -100 }}
                to={{
                  opacity: isVisible ? 1 : 0.25,
                  y: isVisible ? 0 : 100,
                }}
              >
                {item => ({ y, opacity }) => (
                  <animated.div
                    style={{
                      opacity,
                      transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                    }}
                  >
                    <div className="text-wrapper">{item}</div>
                  </animated.div>
                )}
              </Trail>
            </Col>
          </div>
        </React.Fragment>
      )
    })
  }
  return (
    <React.Fragment>
      <ParallaxLayer offset={3.6} factor={3}>
        <article className="home-serve-wrapper">
          <Row type="flex" justify="center" className="home-layout">
            <VisibilitySensor partialVisibility={true} delayedCall={true}>
              {({ isVisible }) => (
                <Spring
                  delay={300}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? `translateY(0)`
                      : `translateY(400px)`,
                  }}
                >
                  {props => (
                    <React.Fragment>
                      <Row style={{ ...props }} className="home-serve">
                        <h3 className="main-title">Getting Started</h3>
                        <i className="line" />
                        {child(context, isVisible)}
                      </Row>
                    </React.Fragment>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </Row>
        </article>
      </ParallaxLayer>
    </React.Fragment>
  )
}

export default GetStarted
