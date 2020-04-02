import React from 'react'

import '@styles/layout.css'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

const Layout = ({ children }) => {

  return (
    <div className={`layout_container`}>
      <Header />
        <div className={`content_container`}>
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout;
