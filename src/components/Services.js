import React, { Component } from "react"
import QueueAnim from "rc-queue-anim"
import ScrollAnim from "rc-scroll-anim"
import { Row, Col } from "antd"
import "../styles/less/services.less"
import fakeData from "./fakeData"

class Services extends Component {
  render() {
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
        <section className="home-layout-wrapper home-serve-wrapper">
          <ScrollElement className="home-layout" playScale={0.0001}>
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
        </section>
      </React.Fragment>
    )
  }
}

export default Services
