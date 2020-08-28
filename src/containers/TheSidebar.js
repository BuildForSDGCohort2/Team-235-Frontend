import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
   CButton,
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
            <div className ="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
               <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
                  <CIcon name="cil-home" /> <span style={{marginLeft:"20px"}}>DASHBOARD</span>
               </CButton>
            </div >
         </Link>
        </div>
         
         {/* * start categories *div */}
         <Link to='/categories'>
         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilListNumbered" /> <span style={{marginLeft:"20px"}}>CATEGORIES</span>
            </CButton>
         </div>
         </Link>
         {/* {/** end categories */}

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilBasket" /> <span style={{marginLeft:"20px"}}>STOCK DETAILS</span>
            </CButton>
         </div>

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilBell" /> <span style={{marginLeft:"20px"}}>SUPPLIES</span>
            </CButton>
         </div>

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilTags" /> <span style={{marginLeft:"20px"}}>ASSETS COLUMN</span>
            </CButton>
         </div>
        
        {/**user management starts */}
        <Link to='/management'>
         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilNotes" /> <span style={{marginLeft:"20px"}}>USER MANAGEMENT</span>
            </CButton>
         </div>
         </Link>
         {/**user management ends */}
         

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilSettings" /> <span style={{marginLeft:"20px"}}>SETTINGS</span>
            </CButton>
         </div>

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilCode" /> <span style={{marginLeft:"20px"}}>ABOUT</span>
            </CButton>
         </div>
      
         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"30px"}}>
            <CButton className="c-sidebar-nav-link c-sidebar-nav-link-danger" style={{border:"none", width:"100%"}}>
              <Link to='/'>
               <CIcon name="cil-user" style={{color:"white"}} /> <span style={{marginLeft:"20px",color:"white"}}>LOGOUT</span>
              </Link>
            </CButton>
         </div>
        {/**end of side bar items */ }
        
         </CSidebarNavItem>
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
