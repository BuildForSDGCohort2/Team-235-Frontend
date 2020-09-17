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
 

 

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

 return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        STOCK TRACKER
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
            <div className ="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
               <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <Link to='/dashboard'>
                  <CIcon name="cil-home" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>DASHBOARD</span>
               </Link>
               </CButton>
            </div >
        </div>
         
         {/* * start categories *div */}
         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
            <Link to='/categories'> 
               <CIcon name="cilListNumbered" style= {{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>CATEGORIES</span>
            </Link>   
            </CButton>
         </div>
         {/* {/** end categories */}

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <Link to='./stock-details'>
               <CIcon name="cilBasket" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>STOCK</span>
               </Link>
            </CButton>
         </div>

         {/* <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               
               <CIcon name="cilBan" style={{color:"white"}} /> <span style={{marginLeft:"20px",color:"white"}}>SUPPLIES</span>
              
            </CButton>
         </div>

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
             
               <CIcon name="cilTags" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>ASSETS COLUMN</span>
             
            </CButton>
         </div> */}
        
        {/**user management starts */}
         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
            <Link to='/management'>
               <CIcon name="cilNotes" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>USER MANAGEMENT</span>
            </Link>
            </CButton>
         </div>
         {/**user management ends */}
         

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <Link to='./'>
               <CIcon name="cilSettings" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>ROLES AND PERMISSIONS</span>
               </Link>
            </CButton>
         </div>

         {/* <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <Link to='./'>
               <CIcon name="cil-code" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>ABOUT</span>
               </Link>
            </CButton>
         </div> */}
        {/**end of side bar items */ }
        
         </CSidebarNavItem>
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
