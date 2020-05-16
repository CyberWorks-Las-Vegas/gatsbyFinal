import React from "react"
import VisibilitySensor from "react-visibility-sensor"
import { Spring } from "react-spring/renderprops"
import { Row, Col } from "antd"
import "../styles/less/services.less"

const Services = ({ context }) => {
  console.log(context)
  const child = (props, context) => {
    console.log(typeof context, Array.isArray(context))
    return context.map(inx => {
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

      return (
        <React.Fragment key={slug}>
          <Col span={8} className="col">
            <div className="content-wrapper home-hover">
              <img className="image" src={src} />
              <h3>{title}</h3>
              <div
                style={{ ...props }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </Col>
        </React.Fragment>
      )
    })
  }
  return (
    <React.Fragment>
      <VisibilitySensor partialVisibility={true} delayedCall={true}>
        {({ isVisible }) => (
          <article className="home-serve-wrapper">
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? `translateY(0)` : `translateY(400px)`,
              }}
            >
              {props => (
                <React.Fragment>
                  <Row type="flex" justify="center" className="home-layout">
                    <div className="home-serve">
                      <h2>Services</h2>
                      <i className="line" />
                      {child(props, context)}
                    </div>
                  </Row>
                </React.Fragment>
              )}
            </Spring>
          </article>
        )}
      </VisibilitySensor>
    </React.Fragment>
  )
}

export default Services
