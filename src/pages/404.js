import React from "react"
import Seo from "../components/Seo"

const NotFoundPage = ({ location }) => (
  <SiteLayout location={{ location }}>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </SiteLayout>
)

export default NotFoundPage
