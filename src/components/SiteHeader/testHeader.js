import React from "react"
import { Link } from "gatsby"
import cyberworksLogo from "../../images/wpgraphql-logo.png"
import "../../styles/less/header.less"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Menu, Row, Col, Icon, Button, Popover, Badge } from "antd"

class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  }
  state = {
    menuVisible: false,
  }
  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible,
    })
  }
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    })
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    })
  }

  render() {
    const { isFirstScreen, isMoblie } = this.props
    const { menuVisible } = this.state
    const menuMode = isMoblie ? `inline` : `horizontal`
    const headerClassName = classNames({
      clearfix: true,
      "home-nav-white": !isFirstScreen,
    })

    const menu = [
      <Button className="header-remote-button" ghost size="medium" key="remote">
        Remote
      </Button>,
      <Menu mode={menuMode} defaultSelectedKeys={[`Home`]} id="nav" key="nav">
        <Menu.Item key="Home">Home</Menu.Item>
        <Menu.Item key="Services">Services</Menu.Item>
        <Menu.Item key="testominals">testominals</Menu.Item>
        <Menu.Item key="contact">contact</Menu.Item>
        <Menu.Item key="about">about</Menu.Item>
        <Menu.Item key="Login">
          <Link
            href="#"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
            <span
              style={{
                display: `inline-block`,
                position: `relative`,
                top: -2,
                width: 18,
              }}
            >
              <Badge dot />
            </span>
          </Link>
        </Menu.Item>
      </Menu>,
    ]

    return (
      <header id="header" className={headerClassName}>
        {menuMode === `inline` ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <Link id="logo">
              <img alt="logo" src={cyberworksLogo} />
              <span className="logo-text">Cyber Works</span>
            </Link>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === `horizontal` ? menu : null}
          </Col>
        </Row>
      </header>
    )
  }
}
export default Header
