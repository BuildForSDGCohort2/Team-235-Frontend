import React, {useState} from 'react';
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
  } from '@coreui/react'

import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'


const Permission = (props) => {

    const usersData = [
        {id: 0, role: 'Administrator', createdBy: 'Administrator', description: 'Adminstrator controls all permission'},
        {id: 1, role: 'Accountant', createdBy: "Administrator", description: 'Accounts tracks prices of the stock'},
        {id: 2, role: 'Accountant', createdBy: "Administrator", description: 'Accounts tracks prices of the stock'},
        {id: 3, role: 'Accountant', createdBy: "Administrator", description: 'Accounts tracks prices of the stock'}
      ]

      const fields = [
        { key: 'role', _style: { width: '25%'} },
        {key:'createdBy', _style: { width: '20%'}},
        { key: 'description'},
        {key: 'options', _style:{width: '20%'}}
      ]
    
      
    return(
        <CContainer fluid>
        {/**start of card background */}
        <CCard className="cards" style={{borderRadius:"10px", padding:"30px", marginTop:"-20px"}}>
           <CCardHeader>
               <Link to= '/createrole'>
               <CButton style={{float:"right"}} color="info" className="mr-1">CREATE NEW ROLE</CButton>
               </Link>
           </CCardHeader>
           {/* <CCardBody> */}
           <CDataTable 
                    style
                    items={usersData}
                    fields={fields}
                    tableFilter
                    itemsPerPageSelect
                    itemsPerPage={10}
                    hover
                    sorter
                    pagination
                    scopedSlots = {{

                   'options':
                    ()=>{
                        return (
                            <td className="py-2">
                              <CDropdown>
                                  <CDropdownToggle>actions</CDropdownToggle>
                                      <CDropdownMenu>
                                          {/**add a history of the user to the view module */}
                                        <CDropdownItem onClick={() => props.history.push('/viewrole')}>View</CDropdownItem>
                                        <CDropdownItem>Update</CDropdownItem>
                                        
                                     <CDropdownItem onClick = {() =>  Swal.fire({
                                        title: "Title",
                                        text: "ARE YOU SURE YOU WANT TO DELETE",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonText:"YES",
                                        cancelButtonText: "NO"
                                     })
                               // .then((result) => {
                                //         // if (result.value) {
                                //         //     // this.$store.dispatch(DELETE_ROLE, item.roleId).then(() => {
                                //         //     //     this.$swal(
                                //         //     //         this.$t('GENERAL.DEL'),
                                //         //     //         item.name + ' '+ this.$t('GENERAL.BEEN'),
                                //         //     //         'success'
                                //         //     //     );
                                //         //     //     this.$refs.table.refresh();
                                //         //     }).catch((error) => {
                                //         //         this.$swal(this.$t('GENERAL.FAILED'),
                                //         //             this.$t('GENERAL.MESSAGE'),
                                //         //             "warning");
                                //         //     });
                                //         }
                                //     });
                                       } >Delete
                                      
                                     
                                     
                                     </CDropdownItem>
                                   </CDropdownMenu>
                               </CDropdown>
                            </td>
                    )}
                }}
            />
       </CCard>
  
</CContainer>
    )
}

export default Permission