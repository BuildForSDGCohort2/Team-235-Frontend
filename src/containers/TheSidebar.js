import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
<<<<<<< HEAD
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
=======
  CDropdownMenu,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {Link} from 'react-router-dom';
>>>>>>> master

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
<<<<<<< HEAD
        /> */} LOGO GOES HERE
=======
        /> */} STOCK TRACKER
>>>>>>> master
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
<<<<<<< HEAD

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
=======
      <CSidebarNavItem>

        {/**start of side bar items */}
        <Link to='/dashboard'>
         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <a class="c-sidebar-nav-link" href="#">
               <CIcon name="cil-home" /> <span style={{marginLeft:"20px"}}>DASHBOARD</span>
            </a>
         </li>
         </Link>
         
         {/** start categories */}
         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <a class="c-sidebar-nav-link" href="#">
               <CIcon name="cilListNumbered" /> <span style={{marginLeft:"20px"}}>CATEGORIES</span>
            </a>
         </li>
         {/** end categories */}

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <a class="c-sidebar-nav-link" href="#">
               <CIcon name="cilBasket" /> <span style={{marginLeft:"20px"}}>STOCK DETAILS</span>
            </a>
         </li>

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <a class="c-sidebar-nav-link" href="#">
               <CIcon name="cilBell" /> <span style={{marginLeft:"20px"}}>SUPPLIES</span>
            </a>
         </li>

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <a class="c-sidebar-nav-link" href="#">
               <CIcon name="cilTags" /> <span style={{marginLeft:"20px"}}>ASSETS COLUMN</span>
            </a>
         </li>
        
         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <a class="c-sidebar-nav-link" href="#">
               <CIcon name="cilNotes" /> <span style={{marginLeft:"20px"}}>USER MANAGEMENT</span>
            </a>
         </li>
         

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <a class="c-sidebar-nav-link" href="#">
               <CIcon name="cilSettings" /> <span style={{marginLeft:"20px"}}>SETTINGS</span>
            </a>
         </li>

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <a class="c-sidebar-nav-link" href="#">
               <CIcon name="cilCode" /> <span style={{marginLeft:"20px"}}>ABOUT</span>
            </a>
         </li>
      
         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"30px"}}>
            <a class="c-sidebar-nav-link c-sidebar-nav-link-danger" href="#">
              <Link to='/'>
               <CIcon name="cil-user" style={{color:"white"}} /> <span style={{marginLeft:"20px",color:"white"}}>LOGOUT</span>
              </Link>
            </a>
         </li>
        {/**end of side bar items */ }


         </CSidebarNavItem>
>>>>>>> master
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
