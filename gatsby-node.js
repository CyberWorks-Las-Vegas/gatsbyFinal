const createNewPages = require(`./gatsby/createNewPages`)
// const createUsers = require(`./gatsby/createUsers`)
// const createCategories = require(`./gatsby/createCategories`)
// const createTags = require(`./gatsby/createTags`)
// const createPosts = require(`./gatsby/createPosts`)

// await createPosts(actions, graphql)
// await createCategories(actions, graphql)
// await createUsers(actions, graphql)
// await createTags(actions, graphql)

exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([
    (async () => {
      try {
        await createNewPages(actions, graphql)
      } catch (err) {
        console.log(err, `in node`)
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
