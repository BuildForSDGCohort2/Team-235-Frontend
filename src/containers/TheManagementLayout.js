import React from 'react'
import {
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import Management from 'src/views/management/Management'

const TheManagementLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <Management />
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheManagementLayout