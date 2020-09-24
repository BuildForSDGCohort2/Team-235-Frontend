import React, {useEffect}  from "react";
import {
            CCard,
            CCardHeader,
            CCardBody,
            CContainer,
            CButton,
            CInputGroup,
            CInputGroupPrepend,
            CInputGroupText,
            CInput,
            CDataTable,
            CDropdown,
            CDropdownItem, 
            CDropdownMenu,
            CDropdownToggle,
        } from "@coreui/react";

import {CIcon} from "@coreui/icons-react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

 

 const StockDetails = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token){
       props.history.push("/404");
    }
 });


    const stockData = [
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"}
    ];

    const tableFields = [
        {key: "name"},
        {key: "dateAdded"},
        {key: "lastUpdated"},
        {key: "categories"},
        {key: "actions"},
        
    ];

     return(
        <CContainer>
        <CCard className="text-center" style={{borderRadius:"5px"}}>
        <CCardHeader> 
          <Link to="/addstock">
            <CButton className="btn btn-info" style={{float:"right"}}>ADD NEW STOCK</CButton>
          </Link>  
                    <CInputGroup style={{width:"30%", float:"left"}}>
                     <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-magnifying-glass"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Search" />
                    </CInputGroup>
        </CCardHeader>

        <CCardBody>
            <CDataTable
            items={stockData}
            fields={tableFields}
            scopedSlots = {{
              "actions":
              () => {
                  return (
                  <td className="py-2">
                      <CDropdown>
                        <CDropdownToggle>Actions</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem>Update</CDropdownItem>
                            <CDropdownItem onClick = {() => 
                               Swal.fire({
                                title: "Title",
                                text: "ARE YOU SURE YOU WANT TO DELETE",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText:"YES",
                                cancelButtonText: "NO"
                             })
                            }
                            >Delete</CDropdownItem>
                            <CDropdownItem onClick = {() => props.history.push("/viewstock")}>View</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                  </td>
              )}
            }}>
   
            </CDataTable>
        </CCardBody>
       </CCard>
       </CContainer>
     );
 };

 export default StockDetails;