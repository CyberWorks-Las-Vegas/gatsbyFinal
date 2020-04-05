const createPosts = require(`./gatsby/createPosts`)
const createPages = require(`./gatsby/createPages`)
const createUsers = require(`./gatsby/createUsers`)
const createCategories = require(`./gatsby/createCategories`)
const createTags = require(`./gatsby/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([
    (async () => {
      try {
        await createPosts({ actions, graphql });
        await createPages({ actions, graphql });
        await createUsers({ actions, graphql });
        await createCategories({ actions, graphql });
        await createTags({ actions, graphql });
      } catch (err) {
        console.log(err)
      }
    })()
  ])
}
