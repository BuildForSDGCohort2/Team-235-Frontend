import React from "react";
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

 

const LIST_OF_ROLES = gql `
   query Roles{
     getRoles{
       id
       name
       description
       permissions{
         id
         value
         description
       }
       createdAt
     }
   }
`

const Permission = (props) => {

      const fields = [
        { key: "role", _style: { width: "25%"} },
        {key:"createdBy", _style: { width: "20%"}},
        { key: "description"},
        {key: "options", _style:{width: "20%"}}
      ];


      const {loading, error, data} = useQuery(LIST_OF_ROLES);
      const rolesData = [];

      try{
        if(loading){
          return "loading"
        }

        if(error){
          console.log(error);
        }

        Object.values(data).forEach(val => {
          val.map(item => {
            const {id, name, description, createdAt} = item;
            rolesData.push({id: id, role: name, createdBy: createdAt, description: description})
          })
        })
      }catch(e){
        console.log(e);
      }
    
      
    return(
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
)};

export default Permission