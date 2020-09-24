import React, {useEffect} from "react"; 
import {Link} from "react-router-dom";

import {
    CButton,
    CCard,
    CDropdown,
    CCardHeader,
    CDataTable,
    CBadge,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CContainer,
    CCardBody
  } from "@coreui/react";
 import Swal from "sweetalert2";
 import {gql, useQuery} from "@apollo/client";
 

const USERS = gql`
  query UserList {
    getUsers{
      id
      firstName
      lastName
      email
      blocked
      isVerified
      phoneNumber

    }
  }
`

//todo private list 

const TheUserManagement = (props) => { 

      const fields = [
        { key: "name", _style: { width: "25%"} },
        {key:"email"},
        { key: "phone", _style: { width: "20%"} },
        { key: "status", _style: { width: "20%"} },
        {key: "options", _style:{width: "20%"}}
      ];
    
      const getBadge = (status) => {
        switch (status) {
          case "Active": return "success"
          case "Inactive": return "secondary"
          case "Pending": return "warning"
          case "Banned": return "danger"
           default: return "primary"
        }
      };
 
      
      useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
          props.history.push("/404")
        }
      });


     const {loading, error, data} = useQuery(USERS);
     const usersData = [];
     try {
      
      if(loading){
        return "loading"  
      }

      if(error){
        console.log(error)
      }

      //TODO:use toast to display errors

    
      
      //populate cdatatable for display on card
      Object.values(data).forEach(val => {
        val.map(item => {
          const {id,firstName, lastName, email, phoneNumber, isVerified, blocked} = item;
          const name = firstName + " " + lastName;
         
          const status = [];

          if(isVerified && !blocked){
             status.push("Active")
          }else if(isVerified && blocked){
            status.push("Blocked")
          }else if(!isVerified && !blocked){
            status.push("Pending")
          }

          //TODO:create a role for users
          usersData.push({id: id, name: name, email: email, phoneNumber: phoneNumber, status: status.toString()});

        })

      })
       
     }catch(e){
        Swal.fire("no data available");
     }
     
      //not available in place of undefined
    return (
      
        
        <CContainer fluid>
        {/**start of card background */}
        <CCard className="cards" style={{borderRadius:"10px", marginTop:"-20px"}}>
           <CCardHeader>
               <Link to="./add" >
               <CButton style={{float:"right"}} color="info" className="mr-1">ADD NEW USER</CButton>
               </Link>
           </CCardHeader>
           {/* <CCardBody> */}
           <CCardBody >
           <CDataTable
                    tableFilter
                    itemsPerPage ={10}
                    hover
                    itemsPerPageSelect
                    sorter
                    pagination 
                    items={usersData}
                    fields={fields}
                    scopedSlots = {{
                    "status":
                    (item)=>(
                        <td>
                        <CBadge color={getBadge(item.status)}>
                            {item.status}
                        </CBadge>
                        </td>
                    ),
                   "options":
                    ()=>{
                        return (
                            <td className="py-2">
                              <CDropdown>
                                  <CDropdownToggle>Actions</CDropdownToggle>
                                      <CDropdownMenu>
                                        <CDropdownItem>Edit</CDropdownItem>
                                        <CDropdownItem onClick = {() =>  Swal.fire({
                                        title: "Title",
                                        text: "ARE YOU SURE YOU WANT TO DELETE",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonText:"YES",
                                        cancelButtonText: "NO"
                                     })
                                     }>
                                          Delete</CDropdownItem>
                                      <CDropdownItem onClick={() => props.history.push("/viewuser")}>View</CDropdownItem>
                                   </CDropdownMenu>
                               </CDropdown>
                            </td>
                    )}
                }}
            ></CDataTable>
            </CCardBody>
       </CCard>
  
</CContainer>
        
)};

//todo private list query which will inherite the to do private list

export default TheUserManagement;