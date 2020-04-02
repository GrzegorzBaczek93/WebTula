import React from 'react'
import { Link } from 'gatsby'

import '@styles/header.css'

const Header = () => {
  return (
    <div className={`header_container`}>
      <Link className={`header_button`} to="/">
        Home
      </Link>
      <Link className={`header_button`} to="/work">
        Work
      </Link>
      <Link className={`header_button`} to="/comissions">
        Comissions
      </Link>
      <Link className={`header_button`} to="/about">
        About
      </Link>
      <a className={`header_button`} href="https://www.etsy.com/shop/tulamakes">
        Shop
      </a>
    </div>
  )
}

export default Header
