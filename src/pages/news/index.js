import React from 'react'

import Layout from '../../components/Layout'
import NewsRoll from '../../components/NewsRoll'

export default class NewsIndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="section">
              <h1>お知らせ</h1>
            </div>
            <NewsRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
