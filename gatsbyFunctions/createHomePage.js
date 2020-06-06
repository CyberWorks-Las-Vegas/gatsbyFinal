const path = require(`path`)
// Will create pages for WordPress pages (route : /Home)
module.exports = async (actions, graphql) => {
  // Variables
  const { createPage } = actions
  const HEADER_CONTENT = []
  const HOME_CONTENT = []
  const FOOTER_CONTENT = []
  const WORDPRESS_DATA = {
    homePage: {
      data: null,
    },
    generalHeader: {
      data: null,
    },
  }
  // Creates 'database' in gatsby from the fetched WP data to run graphql queries
  return (
    graphql(
      `
        query LOAD {
          cyberworksQL {
            home_contents {
              edges {
                node {
                  acf {
                    content
                    order
                    title
                    image {
                      altText
                      sourceUrl
                      modified
                    }
                  }
                }
              }
            }
            header_contents {
              edges {
                node {
                  title(format: RENDERED)
                  acf {
                    order
                  }
                }
              }
            }
          }
        }
      `
    ) // Function to get wordpress data and return usable context
      .then(results => {
        // Check for errors and bubble up any errors
        if (results.errors) {
          console.log(results.errors) // Remove from prod
          throw new Error(
            `NEW ERROR WHILE: fetching wordpress content from wordpress, (NEW_ERROR)=> ${results.errors}`
          )
        }
        // Get wordpress data
        WORDPRESS_DATA.generalHeader.data = results.data.header_contents
        WORDPRESS_DATA.homePage.data = results.data.Home_contents
        // Test incoming data - Remove from prod
        console.log({
          wp_home_data: WORDPRESS_DATA.homePage.data,
          wp_header_data: WORDPRESS_DATA.generalHeader.data,
        })
        // Check if error has been thrown before running
        if (!results.errors) {
          // Access query results via object destructuring
          const {
            cyberworksQL: {
              header_contents: { edges: headerEdges },
            },
          } = WORDPRESS_DATA.generalHeader.data
          const {
            cyberworksQL: {
              home_contents: { edges: homeEdges },
            },
          } = WORDPRESS_DATA.homePage.data
          // Loop thru header data and return new object for header/footer
          headerEdges.map(node => {
            console.log({ headerEdges: node }) // Remove from prod
            // Destructure
            const {
              title,
              acf: { order },
            } = node
            // Make object for data
            const WP_DATA_OBJECT = {
              order,
              title,
            }
            // Make new immutable object
            const NODE_OBJECT = Object.assign({}, WP_DATA_OBJECT)
            // Push content in proper array
            HEADER_CONTENT.push(NODE_OBJECT)
            FOOTER_CONTENT.push(NODE_OBJECT)
          })
          // Loop thru home data then push content in proper array and return new object
          homeEdges.map(node => {
            console.log({ homeEdges: node.acf }) // Remove from prod
            // Destructure
            const {
              acf: { content, order, title },
            } = node
            // Make object for data
            const WP_DATA_OBJECT = {
              content,
              order,
              title,
            }
            // Make new immutable object
            const NODE_OBJECT = Object.assign({}, WP_DATA_OBJECT)
            // Push content in proper array
            HOME_CONTENT.push(NODE_OBJECT)
          })
        }
        // Return usable content
        return {
          header: HEADER_CONTENT,
          home: HOME_CONTENT,
          footer: FOOTER_CONTENT,
        }
      })
      // Run function then return content from function and use to create new gatsby page
      .then(content => {
        // Get path for homepage template
        const pageTemplate = path.resolve(`./src/templates/homePage.jsx`)
        console.log(`create home page: ${content}`) // Remove from prod
        // Destructure
        const { header, home, footer } = content
        // Use gatsby internal function to dynamically create pages
        createPage({
          path: `/Home`,
          component: pageTemplate,
          context: { header, home, footer },
        })
      })
      .catch(err => {
        throw new Error(
          `all errors that bubbled up in createHomePges.js (ALL_ERRORS) => ${err}`
        )
      })
  )
}
