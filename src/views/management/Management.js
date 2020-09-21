import React, {useEffect} from 'react' 
import {Link} from 'react-router-dom';
 
 
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
    CContainer
  } from '@coreui/react'
 import Swal from 'sweetalert2'
 import {gql, useQuery, client, ApolloProvider} from '@apollo/client'
 




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

const TheUserManagement = (props) => { 

    const usersData = [
        {id: 0, name: 'John Doe', email: 'kwakuboafo@gmail.com', phone: '0543243676', status: 'Pending'},
        {id: 1, name: 'Samppa Nori', email: 'kwakuboafo@gmail.com', phone: '0564438556', status: 'Active'},
        {id: 2, name: 'Estavan Lykos', email: 'serwahasamoah@gmail.com', phone: '0278834566', status: 'Banned'},
        {id: 3, name: 'Chetan Mohamed', email: 'serwahasamoah@gmail.com', phone: '0234456782', status: 'Inactive'}
        
      ]
    
      const fields = [
        { key: 'name', _style: { width: '25%'} },
        {key:'email'},
        { key: 'phone', _style: { width: '20%'} },
        { key: 'status', _style: { width: '20%'} },
        {key: 'options', _style:{width: '20%'}}
      ]
    
      const getBadge = (status) => {
        switch (status) {
          case 'Active': return 'success'
          case 'Inactive': return 'secondary'
          case 'Pending': return 'warning'
          case 'Banned': return 'danger'
          default: return 'primary'
        }
      }

      useEffect(() => {
         const token = localStorage.getItem('token');
         if(!token){
            props.history.push('/404');
         }

        //fetchUserList
      });
 
   
    return (
      
        
        <CContainer fluid>
        {/**start of card background */}
        <CCard className="cards" style={{borderRadius:"10px", padding:"30px", marginTop:"-20px"}}>
           <CCardHeader>
               <Link to="./add" >
               <CButton style={{float:"right"}} color="info" className="mr-1">ADD NEW USER</CButton>
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

                    'status':
                    (item)=>(
                        <td>
                        <CBadge color={getBadge(item.status)}>
                            {item.status}
                        </CBadge>
                        </td>
                    ),
                   'options':
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
                                       } 
                                          
                                       >
                                          Delete</CDropdownItem>
                                      <CDropdownItem onClick={() => props.history.push('/viewuser')}>View</CDropdownItem>
                                   </CDropdownMenu>
                               </CDropdown>
                            </td>
                    )}
                }}
            />
       </CCard>
  
</CContainer>
        
)}

export default TheUserManagement;