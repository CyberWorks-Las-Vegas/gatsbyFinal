import React from "react"

const Footer = props => (
  <React.Fragment>
    <Footer style={{ textAlign: `center` }}>
      © {new Date().getFullYear()} | Powered by {` `}
      <a href="https://cyberworks.tech">cyberworks</a> and{` `}
    </Footer>
  </React.Fragment>
)

export default Footer
