const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post-template.js`)
    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: frontmatter___date }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  date
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }
        const posts = result.data.allMarkdownRemark.edges
        posts.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
              slug: node.fields.slug,
            },
          })
          // resolve()
        })
      })
    )
  })
}

// create MarkdownRemark's node's fields
// with file's name insides "page" directory as "slug"'s value
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
