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

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
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
                boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                backgroundColor: 'rgb(255, 68, 0)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
                textAlign: 'right'
              }}
            >
          Sachiho Matsumoto - Fluitist
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
