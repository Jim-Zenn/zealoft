/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs")
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const journalTemplate = path.resolve(`src/templates/Journal.js`)
  const photoTemplate = path.resolve(`src/templates/Photo.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: journalTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  const photosJson = JSON.parse(
    fs.readFileSync("./src/data/Photos.json", { encoding: "utf-8" })
  )

  photosJson.forEach(photoMeta => {
    createPage({
      path: `/photos/${photoMeta.title}`,
      component: photoTemplate,
      context: { photoMeta: photoMeta },
    })
  })
}
