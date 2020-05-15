import React from "react"
import PropTypes from "prop-types"
import ScrollAnim from "rc-scroll-anim"
import { Icon } from "antd"
import QueueAnim from "rc-queue-anim"
import "../styles/less/banner.less"

function typeFunc(a) {
  if (a.key === `line`) {
    return `right`
  } else if (a.key === `button`) {
    return `bottom`
  }
  return `left`
}
const ScrollElement = ScrollAnim.Element
export default function Banner(props) {
  return (
    <section className="page banner-wrapper">
      <ScrollElement className="page" id="banner" playScale={0.2}>
        <QueueAnim
          className="banner-text-wrapper"
          type={typeFunc}
          delay={300}
          key="banner"
        >
          <h2 key="h2">
            CYBER <p>SOLUTIONS</p>
          </h2>
          <p key="content">insert inspiring motto</p>
          <span className="line" key="line" />
          <div key="button1" className="start-button clearfix">
            <a>Get Started</a>
          </div>
        </QueueAnim>
        <Icon type="down" className="down" />
      </ScrollElement>
    </section>
  )
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
}
