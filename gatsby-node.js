/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

const contentful = require("contentful");

exports.createPages = ({ actions }) => {
  // **Note:** The graphql function call returns a Promise
  const { createPage } = actions

  const vehicleTemplate = path.resolve('./src/templates/vehicle.js')

  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "ha2jf8a02dgv",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "JTJwX900_EuysS5xc2usmqmJvWsIUrwFecjrU_TxNt4"
  });

  return client.getEntries()
    .then(function (entries) {
      entries.items.forEach(item => {
        console.log(item.sys.id)
        createPage({
          path: item.sys.id,
          component: vehicleTemplate,
          context: {
            vehicle: item
          },
        })
      })
    })
}
