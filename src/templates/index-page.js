import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import NewsRoll from '../components/NewsRoll'

export const IndexPageTemplate = ({
  image,
  title,
  contactHeading,
  contactBody,
  newsHeading,
  newsReadMore
}) => (
  <div>
    <section className="section">
      <div className="container">
        <div className="section">
          <h1>{newsHeading}</h1>
          <NewsRoll />
          <div style={{ marginTop: '1em' }}>
            <Link className="btn" to="/news">{newsReadMore}</Link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="section">
          <h1>{contactHeading}</h1>
          <p dangerouslySetInnerHTML={{ __html: contactBody }} />
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        contactHeading={frontmatter.contactHeading}
        contactBody={frontmatter.contactBody}
        newsHeading={frontmatter.newsHeading}
        newsReadMore={frontmatter.newsReadMore}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        contactHeading
        contactBody
        newsHeading
        newsReadMore
      }
    }
  }
`
