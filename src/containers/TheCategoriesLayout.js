import React from 'react'

import {
    TheSidebar,
    TheFooter,
    TheHeader
  } from './index'
  import Categories from 'src/views/categories/Categories'

//layout of the categories
  
  const TheCategories = () => {
  
    return (
      <div className="c-app c-default-layout">
        <TheSidebar/>
        <div className="c-wrapper">
          <TheHeader/>
          <div className="c-body">
             <Categories />
          </div>
          <TheFooter/>
        </div>
      </div>
    )
  }
  
  export default TheCategories