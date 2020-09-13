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
 
const TheUserManagement = (props) => 
{ 
    const usersData = [
        {id: 0, name: 'John Doe', email: 'kwakuboafo@gmail.com', phone: '0543243676', status: 'Pending'},
        {id: 1, name: 'Samppa Nori', email: 'kwakuboafo@gmail.com', phone: '0564438556', status: 'Active'},
        {id: 2, name: 'Estavan Lykos', email: 'serwahasamoah@gmail.com', phone: '0278834566', status: 'Banned'},
        {id: 3, name: 'Chetan Mohamed', email: 'serwahasamoah@gmail.com', phone: '0234456782', status: 'Inactive'},
        {id: 4, name: 'Derick Maximinus', email: 'amakuma@gmail.com', phone: '0563325647', status: 'Pending'},
        {id: 5, name: 'Friderik Dávid', email: 'sarpongemmanuel@gmail.com', phone: '0278834566', status: 'Active'},
        {id: 6, name: 'Yiorgos Avraamu', email: 'kwakuboafo@gmail.com', phone: '0563325647', status: 'Active'},
        {id: 7, name: 'Avram Tarasios', email: 'serwahasamoah@gmail.com', phone: '0278834566', status: 'Banned'},
        {id: 0, name: 'John Doe', email: 'kwakuboafo@gmail.com', phone: '0543243676', status: 'Pending'},
        {id: 1, name: 'Samppa Nori', email: 'kwakuboafo@gmail.com', phone: '0564438556', status: 'Active'},
        {id: 2, name: 'Estavan Lykos', email: 'serwahasamoah@gmail.com', phone: '0278834566', status: 'Banned'},
        {id: 3, name: 'Chetan Mohamed', email: 'serwahasamoah@gmail.com', phone: '0234456782', status: 'Inactive'},
        {id: 4, name: 'Derick Maximinus', email: 'amakuma@gmail.com', phone: '0563325647', status: 'Pending'},
        {id: 5, name: 'Friderik Dávid', email: 'sarpongemmanuel@gmail.com', phone: '0278834566', status: 'Active'},
        {id: 6, name: 'Yiorgos Avraamu', email: 'kwakuboafo@gmail.com', phone: '0563325647', status: 'Active'},
        {id: 7, name: 'Avram Tarasios', email: 'serwahasamoah@gmail.com', phone: '0278834566', status: 'Banned'}
        
      ]
    
      const fields = [
        { key: 'name', _style: { width: '25%'} },
        {key:'email'},
        { key: 'phone', _style: { width: '20%'} },
        { key: 'status', _style: { width: '20%'} },
        {key: 'options', _style:{width: '20%'}}
      ]
    
      const getBadge = (status)=>{
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
      })
   
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
                                  <CDropdownToggle>more</CDropdownToggle>
                                      <CDropdownMenu>
                                        <CDropdownItem>Edit</CDropdownItem>
                                        <CDropdownItem>Delete</CDropdownItem>
                                      <CDropdownItem>Assign roles</CDropdownItem>
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