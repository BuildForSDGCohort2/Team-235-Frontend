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

let block = false;

const USERS = gql`
  query UserList {
    getUsers{
      id
      firstName
      lastName
      email
      phoneNumber
      blocked
      isVerified
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


     const { error, data} = useQuery(USERS);
     const usersData = [];
     try {
      block = true; //toggles BlockUi to true when loading
       
      if(error && !data){
        block = false
        Swal.fire({
          title: "Network problem",
          html: "cannot display list of users",
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          icon: "error",
          position: "top"
        });
      };


    if(data){
       
      block = false;
      Object.values(data).forEach(val => {
        val.map(item => {
          const {id,firstName, lastName, email, phoneNumber, isVerified, blocked} = item;
          const name = firstName + " " + lastName;

          const phone = phoneNumber !== null ? phoneNumber : "not available";
         
          let status = "";

          if(isVerified && !blocked){
             status = "Active";
          }else if(isVerified && blocked){
            status = "Blocked";
          }else if(!isVerified && !blocked){
            status = "Pending";
          }
          
          return(
            usersData.push(
              {
                id, 
                name, 
                email, 
                phoneNumber: phone, 
                status
              })
          );
        })

      })
    }else if(!data && error){
      block = false;
      Swal.fire({
        title: "Not authorized",
        html: "to view list of users",
        showConfirmButton: false,
        icon: "danger"
      });
    };
     
       
     }catch(e){
       block = false
      Swal.fire({
        title: e,
        showConfirmButton: false,
        icon: "danger"
      });
     };

     
     
     
     
      //not available in place of undefined
    return (
      
      <BlockUi tag="div"  blocking={block}> 
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
                    id = "table"
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
                                      <CDropdownItem onClick={() => props.history.push({
                                        pathname: "/viewuser",
                                        something: {
                                          data
                                        }
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
)};

export default TheUserManagement;