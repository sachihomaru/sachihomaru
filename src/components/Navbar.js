import React from 'react'
import { Link } from 'gatsby'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Navbar = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ''
    }
  }

  toggleHamburger () {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active'
          })
          : this.setState({
            navBarActiveClass: ''
          })
      }
    )
  };

  render () {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="navbar-toggle" onClick={() => {
            const nav = document.querySelector('.navbar-menu')
            if (nav.classList.contains('show')) {
              nav.classList.remove('show')
            } else {
              nav.classList.add('show')
            }
          }}><i className="fas fa-bars"></i></div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <Link className="navbar-item" to="/">ホーム</Link>
            <Link className="navbar-item" to="/about">プロフィール</Link>
            <Link className="navbar-item" to="/blog">お知らせ</Link>
            <Link className="navbar-item" to="/contact">お問い合わせ</Link>
            <a className="navbar-item" title="twitter" href="https://twitter.com/fl_sachiho" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="navbar-item" title="instagram" href="https://instagram.com/fl_sachiho" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
