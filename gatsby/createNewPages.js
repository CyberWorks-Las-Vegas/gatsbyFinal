const path = require(`path`)

module.exports = async (actions, graphql) => {
  const GET_PAGE_CONTENT = `
    {
      allWordpressWpHomeContent {
        nodes {
          slug
          path
          title
          content
          id
        }
      }
    }
  `
  const { createPage } = actions
  const allContent = []
  let graphqlErrors = null
  const fetchHomePageContent = async () => {
    const WP_DATA = await graphql(GET_PAGE_CONTENT)
      .then(data => data)
      .catch(err => (graphqlErrors = err))

    if (graphqlErrors === null) {
      const {
        data: {
          allWordpressWpHomeContent: {
            nodes: { slug, path, title, content, id },
          },
        },
      } = WP_DATA
      allContent.push(slug, path, title, content, id)
    }
    return allContent
  }

  await fetchHomePageContent().then(contentArray => {
    const pageTemplate = path.resolve(`./src/templates/homePage.js`)

    console.log(`create home page: ${contentArray}`)
    createPage({
      path: `/Home`,
      component: pageTemplate,
      context: contentArray,
    })
  })
}
