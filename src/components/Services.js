import React from "react"
import QueueAnim from "rc-queue-anim"
import ScrollAnim from "rc-scroll-anim"
import { ParallaxLayer } from "react-spring/renderprops-addons"
import { Row, Col } from "antd"
import { css } from "theme-ui"
import "../styles/less/services.less"
import fakeData from "./fakeData"

const Services = ({ context }) => {
  const ScrollElement = ScrollAnim.Element
  const child = fakeData.map((d, i) => (
    <Col span={8} className="col" key={i.toString()}>
      <QueueAnim
        type="bottom"
        className="content-wrapper home-hover"
        onClick={() => {
          window.location.href = `/intro/price `
        }}
      >
        <div key="image" className="image">
          {d.svg}
        </div>
        <h3 key="h3">{d.title}</h3>
        {d.content}
        {d.exp && (
          <div className="exp" key="exp">
            {d.exp}
          </div>
        )}
      </QueueAnim>
    </Col>
  ))
  return (
    <React.Fragment>
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
        <article className="home-layout-wrapper home-serve-wrapper">
          <ScrollElement className="home-layout" playScale={0.7}>
            <QueueAnim
              className="home-serve"
              type="bottom"
              key="home-func"
              ease="easeOutQuart"
              leaveReverse
            >
              <h2 key="h2">服务方案</h2>
              <i key="i" className="line" />
              <QueueAnim
                key="content"
                component={Row}
                type="bottom"
                componentProps={{ gutter: 96 }}
              >
                {child}
              </QueueAnim>
            </QueueAnim>
          </ScrollElement>
        </article>
      </ParallaxLayer>
    </React.Fragment>
  )
}

export default Services
