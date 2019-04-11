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
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                News
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a className="navbar-item" title="twitter" href="https://twitter.com/fl_sachiho" target="_blank" rel="noopener noreferrer">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a className="navbar-item" title="instagram" href="https://instagram.com/fl_sachiho" target="_blank" rel="noopener noreferrer">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
