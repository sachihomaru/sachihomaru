import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class NewsRoll extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts && (posts
          .map(({ node: post }) => (
            <div
              className="is-parent column is-6"
              key={post.id}
            >
              <article>
                <h1>
                  {post.frontmatter.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </article>
            </div>
          )))}
      </div>
    )
  }
}

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
    query NewsRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___path] },
        filter: { frontmatter: { templateKey: { eq: "news-post" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <NewsRoll data={data} count={count} />
    )}
  />
)
