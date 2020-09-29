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
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";


let block = false;

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

      const fields = [
        { key: "role", _style: { width: "25%"} },
        {key:"createdBy", _style: { width: "20%"}},
        { key: "description"},
        {key: "options", _style:{width: "20%"}}
      ];


      const {error, data} = useQuery(LIST_OF_ROLES);
      const rolesData = [];

      try{
        
        block = true;

        if(error){
          Swal.fire({
            title: "Network problem",
            html: " cannot display list of users",
            timer: 2000,
            toast: true,
            position: "top",
            showConfirmButton: false,
            icon: "error"
         });
        };

        

        if(data){
          block = false;
          Object.values(data).forEach(val => {
            val.map(item => {
              //TODO: integrate update roles api
              const creator = [];
              if(item.createdBy === null){
                creator.push("Not available");
              }else{
                 const {firstName, lastName} = item.createdBy;
                 if(firstName === "Admin"){
                   creator.push(firstName);
                 }else {
                   creator.push(firstName + " " + lastName);
                 }
              }
  
               const descriptionOfRole = item.description === null ? "Has full access" : item.description;
            
              return (
                  rolesData.push(
                    {
                     id: item.id, 
                     role: item.name, 
                     createdBy: creator.toString(), 
                     description: descriptionOfRole
                    })
              )
            });
          });

        }else if(!data && error){
          block = false;
          Swal.fire({
            title: "Not authorized",
            html: "to view list of roles",
            icon: "warning",
            showConfirmButton: false
          });
        }
        
      }catch(e){
        console.log(e);
      }
    
      
    return(
       <BlockUi tag="div" blocking={block} >
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