import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarMinimizer,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {Link} from 'react-router-dom';

// sidebar nav config

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
        /> */} STOCK TRACKER
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
      <CSidebarNavItem>

        {/**start of side bar items */}
        <div>
        <Link to='/dashboard'>
         <div class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <button class="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cil-home" /> <span style={{marginLeft:"20px"}}>DASHBOARD</span>
            </button>
         </div>
         </Link>
         </div>
         
         {/** start categories */}
         <Link to='/categories'>
         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <button class="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilListNumbered" /> <span style={{marginLeft:"20px"}}>CATEGORIES</span>
            </button>
         </li>
         </Link>
         {/** end categories */}

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <button class="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilBasket" /> <span style={{marginLeft:"20px"}}>STOCK DETAILS</span>
            </button>
         </li>

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <button class="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilBell" /> <span style={{marginLeft:"20px"}}>SUPPLIES</span>
            </button>
         </li>

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <button class="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilTags" /> <span style={{marginLeft:"20px"}}>ASSETS COLUMN</span>
            </button>
         </li>
        
        {/**user management starts */}
        <Link to='/management'>
         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <button class="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilNotes" /> <span style={{marginLeft:"20px"}}>USER MANAGEMENT</span>
            </button>
         </li>
         </Link>
         {/**user management ends */}
         

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <button class="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilSettings" /> <span style={{marginLeft:"20px"}}>SETTINGS</span>
            </button>
         </li>

         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <button class="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilCode" /> <span style={{marginLeft:"20px"}}>ABOUT</span>
            </button>
         </li>
      
         <li class="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"30px"}}>
            <button class="c-sidebar-nav-link c-sidebar-nav-link-danger" style={{border:"none", width:"100%"}}>
              <Link to='/'>
               <CIcon name="cil-user" style={{color:"white"}} /> <span style={{marginLeft:"20px",color:"white"}}>LOGOUT</span>
              </Link>
            </button>
         </li>
        {/**end of side bar items */ }


         </CSidebarNavItem>
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
