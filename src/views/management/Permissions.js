import React, {useEffect} from "react";
import {
    CButton,
    CCard,
    CDropdown,
    CCardHeader,
    CDataTable,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CContainer
  } from "@coreui/react";

import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {gql, useQuery} from "@apollo/client";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";


let block = true;

const LIST_OF_ROLES = gql `
   query Roles{
     getRoles{
       id
       name
       description
       createdBy{
         firstName
         lastName
       }
     }
   }
`

const Permission = (props) => {
    
  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenType = sessionStorage.getItem("tokenType");
    if(!token || !tokenType){
       props.history.push("/404");
    }
 });


      const {error, data} = useQuery(LIST_OF_ROLES);
      const rolesData = [];

      const fields = [
        { key: "role", _style: { width: "25%"} },
        {key:"createdBy", _style: { width: "20%"}},
        { key: "description"},
        {key: "options", _style:{width: "20%"}}
      ];

      try{
        
        if(error){
          block = false;
          Swal.fire({
            title: "Cannot display roles",
            html: "check internet connection or contact admin for authorization",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000
          });
        };

        

        if(data){
          block = false;
          Object.values(data).forEach(val => {
            val.map(item => {

              let creator = "";
              if(item.createdBy === null){
                creator = "Not available";
              }else{
                 const {firstName, lastName} = item.createdBy;
                 creator = firstName === "Admin" ? firstName : firstName + " " + lastName;
              }
  
               const descriptionOfRole = item.description === null ? "Has full access" : item.description;
            
              return (
                  rolesData.push(
                    {
                     id: item.id, 
                     role: item.name, 
                     createdBy: creator, 
                     description: descriptionOfRole
                    }))
            });
          });
        } 
        
      }catch(e){
         console.log(e);
      }
    
      
    return(
       <BlockUi message ="Please wait" blocking={block} >
        <CContainer fluid>
        {/**start of card background */}
        <CCard className="cards" style={{borderRadius:"10px", padding:"30px", marginTop:"-20px"}}>
           <CCardHeader>
               <Link to= "/createrole">
               <CButton style={{float:"right"}} color="info" className="mr-1">CREATE NEW ROLE</CButton>
               </Link>
           </CCardHeader>
           {/* <CCardBody> */}
           <CDataTable 
                    style
                    items={rolesData}
                    fields={fields}
                    tableFilter
                    itemsPerPageSelect
                    itemsPerPage={10}
                    hover
                    sorter
                    pagination
                    scopedSlots = {{

                   "options":
                    ()=>{
                        return (
                            <td className="py-2">
                              <CDropdown>
                                  <CDropdownToggle>actions</CDropdownToggle>
                                      <CDropdownMenu>
                                          {/**add a history of the user to the view module */}
                                        <CDropdownItem onClick={() => props.history.push("/viewrole")}>View</CDropdownItem>
                                        <CDropdownItem>Update</CDropdownItem>
                                        
                                     <CDropdownItem onClick = {() =>  Swal.fire({
                                        title: "Title",
                                        text: "ARE YOU SURE YOU WANT TO DELETE",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonText:"YES",
                                        cancelButtonText: "NO"
                                     })} >Delete
                                     </CDropdownItem>

                                   </CDropdownMenu>
                               </CDropdown>
                            </td>
                    )}
                }}
            />
       </CCard>
</CContainer>
</BlockUi>
)};

export default Permission;