import React, {useEffect} from "react"; 
import {Link} from "react-router-dom";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

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

let block = true;
let userInfo = {};

const USERS = gql`
  query UserList {
    getUsers{
      id
      firstName
      lastName
      email
      phoneNumber
      blocked
      isVerified,
      roles{
        id
        name
        description
        
      }
    }
  }
`

//todo private list 

const TheUserManagement = (props) => { 

      const fields = [
        { key: "name", _style: { width: "25%"} },
        {key:"email"},
        { key: "phoneNumber", _style: { width: "20%"} },
        { key: "status", _style: { width: "20%"} },
        {key: "options", _style:{width: "20%"}}
      ];
    
      const getBadge = (status) => {
        switch (status) {
          case "active": return "success"
          case "inactive": return "secondary"
          case "pending": return "warning"
          case "banned": return "danger"
           default: return "primary"
        }
      };
 
      
      useEffect(() => {
        const token = localStorage.getItem("token");
        const tokenType = sessionStorage.getItem("tokenType");
        if(!token || !tokenType){
           props.history.push("/404");
        }
     })


     const { error, data} = useQuery(USERS);
     const usersData = [];
     try {
      
      //refetch();

      if(error){
        block = false;
        Swal.fire({
          title: "Cannot display users",
          html: "Check internet connection or contact admin for authorization",
          showConfirmButton: false,
          icon: "error",
          timer: 3000
        });
      };


    //condition executes when user data are fetch successfully
    if(data){
      block = false;
      Object.values(data).forEach(val => {
        val.map(item => {
          const {id,firstName, lastName, email, phoneNumber, isVerified, blocked, roles, createdAt} = item;
          const name = firstName + " " + lastName;

          const phone = phoneNumber !== null ? phoneNumber : "not available";
         
          let status = "";

          if(isVerified && !blocked){
             status = "active";
          }else if(isVerified && blocked){
            status = "blocked";
          }else if(!isVerified && !blocked){
            status = "pending";
          }
          
          return(
            usersData.push(
              {
                id, 
                name, 
                email, 
                phoneNumber: phone, 
                status,
                roles,
                isVerified,
                blocked,
                createdAt
              })
          );
        })

      })
    } 
     
     }catch(e){};


    return (
      <>
      <BlockUi message= "Please wait..." blocking={block} > 
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
                    onRowClick={(e) => userInfo = e
                    }
                    responsive={true}
                    hover ={true}
                    striped = {true}
                    tableFilter
                    itemsPerPage ={10}
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
                                        <CDropdownItem onClick = {() => props.history.push({
                                          pathname: "/updateuser",
                                          data: userInfo
                                        })}>Update</CDropdownItem>
                                        <CDropdownItem onClick = {() =>  Swal.fire({
                                        title: "Are you sure you want to delete",
                                        width: "800px",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonText:"YES",
                                        cancelButtonText: "NO"
                                     })
                                     }>
                                          Delete</CDropdownItem>
                                      <CDropdownItem onClick={() => props.history.push({
                                        pathname: "/viewuser",
                                         data: userInfo
                                      })}>View</CDropdownItem>
                                   </CDropdownMenu>
                               </CDropdown>
                            </td>
                          
                    )}
                }}
            >
          
            </CDataTable>
            </CCardBody>
       </CCard>
  
</CContainer>
</BlockUi>  
</> 
)};

export default TheUserManagement;