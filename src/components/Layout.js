import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.scss'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
        </Helmet>
        <Navbar />
        <div
          className="container"
          style={{
            backgroundImage: `url(/img/home-jumbotron.jpg)`,
            backgroundSize: '100% auto'
          }}
        >
          <div className="jumbo" style={{
            display: 'flex',
            lineHeight: '1',
            justifyContent: 'flex-end',
            alignItems: 'left',
            flexDirection: 'column' }}>
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              style={{
                backgroundColor: 'rgba(255, 68, 100, 0.7)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
                textAlign: 'right'
              }}
            >
              Sachiho Suzuki - Flutist
            </h1>
          </div>
        </div>
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
