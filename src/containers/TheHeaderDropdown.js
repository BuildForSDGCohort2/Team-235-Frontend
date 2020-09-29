import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = () => {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/dashboard";
  }

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={true}>
        <div className="c-avatar">
          <CImg
            src={"avatars/6.jpg"}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
         
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" /> 
           Profile
        </CDropdownItem>
        
        <CDropdownItem onClick={ () => logout()}>
          <CIcon name="cil-lock-locked" className="mfe-2" /> 
           Logout
        </CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
  )};

export default TheHeaderDropdown;
