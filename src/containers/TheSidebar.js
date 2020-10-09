import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CButton,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarMinimizer,
  CSidebarNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import {Link} from "react-router-dom";
 
const sideBarNavStyle =  {
    backgroundColor: "#24385e",
    marginTop: "10px"
}

const buttonStyle = {
   border: "none",
   width: "100%"
}

const iconStyle = {
   color: "white"
}

const spanStyle = {
   marginLeft: "20px",
   color: "white"
}
 

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

 return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: "set", sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none">
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
            <div className ="c-sidebar-nav-item" style={sideBarNavStyle}>
            <Link to="/dashboard">
               <CButton className="c-sidebar-nav-link" style={buttonStyle}>
                  <CIcon name="cil-home" style={iconStyle} /> <span style={spanStyle}>DASHBOARD</span>
               </CButton>
            </Link>
            </div >
        </div>
         
         {/* * start categories *div */}
         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
         <Link to="/categories"> 
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilListNumbered" style= {{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>CATEGORIES</span>
            </CButton>
            </Link> 
         </div>
         {/* {/** end categories */}

         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
         <Link to="./stock-details">
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilBasket" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>STOCK</span>
            </CButton>
         </Link>
         </div>

        
        
        {/**user management starts */}
         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
         <Link to="/management">
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilNotes" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>USER MANAGEMENT</span>
            </CButton>
         </Link> 
         </div>
         {/**user management ends */}
         

         {/* <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <Link to="/report">
               <CIcon name="cilPrint" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>REPORT</span>
               </Link>
            </CButton>
         </div> */}

         
         <div className="c-sidebar-nav-item" style={{backgroundColor:"#24385e", marginTop:"10px"}}>
          <Link to="/permission"> 
            <CButton className="c-sidebar-nav-link" style={{border:"none", width:"100%"}}>
               <CIcon name="cilSettings" style={{color:"white"}} /> <span style={{marginLeft:"20px", color:"white"}}>ROLES AND PERMISSIONS</span>
            </CButton>
          </Link>   
         </div>
          
        
         </CSidebarNavItem>
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar);
