const createHomePage = require(`./gatsbyFunctions/createHomePage`)
const createSitePages = require(`./gatsbyFunctions/createSitePages`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  await Promise.all([
    (async () => {
      try {
        await createHomePage(actions, graphql)
        await createSitePages(actions, graphql)
      } catch (err) {
        reporter.panicOnBuild(`Error while running GraphQL query: ${err}`)
      }
    })(actions, graphql),
  ])
}

//exports.onCreateNode = ({ node, actions }) => {
// const { createNodeField } = actions

/**
 * If these don't exist, the LBN WordPress Plugin isn't installed – so build all posts.
 */
//   if (
//     !Object.prototype.hasOwnProperty.call(node, `meta`) ||
//     !Object.prototype.hasOwnProperty.call(node.meta, `lbn_published_production`)
//   ) {
//     createNodeField({ node, name: `deploy`, value: true })
//     return
//   }

//   let deploy

//   if (node.meta[`DEPLOY_ENV`]) {
//     deploy = true
//   } else {
//     deploy = false
//   }

//   createNodeField({ node, name: `deploy`, value: deploy })
// }
