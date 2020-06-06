// const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
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

// exports.createResolvers = async ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const { createNode } = actions

//   try {
//     await createResolvers({
//       cyberworks_MediaItem: {
//         imageFile: {
//           type: `File`,
//           async resolve(source) {
//             let sourceUrl = source.sourceUrl
//             let remoteFileNode

//             try {
//               if (source.mediaItemUrl !== undefined) {
//                 sourceUrl = source.mediaItemUrl
//               }

//               remoteFileNode = await createRemoteFileNode({
//                 url: encodeURI(sourceUrl),
//                 store,
//                 cache,
//                 createNode,
//                 createNodeId,
//                 reporter,
//               })
//             } catch (err) {
//               reporter.panicOnBuild(`Error while creating image nodes: ${err}`)
//             }
//             return remoteFileNode
//           },
//         },
//       },
//     })
//   } catch (err) {
//     reporter.panicOnBuild(`Error while running image resolver: ${err}`)
//   }
// }
