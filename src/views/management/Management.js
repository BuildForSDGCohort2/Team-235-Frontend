import React from 'react' 
import  {useState}  from 'react';
import {Link} from 'react-router-dom';
 
import {CButton,CCard, CCardBody, CCardHeader,CDataTable,CBadge,CCollapse, CContainer} from '@coreui/react'
 
const TheUserManagement = () => {
  const [details, setDetails] = useState([])
  
    const usersData = [
        {id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
        {id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
        {id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
        {id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending'},
        {id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active'},
        {id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
        
      ]
    
    
    //   const [items, setItems] = useState(usersData)
    
      const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
          newDetails.splice(position, 1)
        } else {
          newDetails = [...details, index]
        }
        setDetails(newDetails)
      }
    
    
      const fields = [
        { key: 'name', _style: { width: '40%'} },
        'registered',
        { key: 'role', _style: { width: '20%'} },
        { key: 'status', _style: { width: '20%'} },
        {
          key: 'show_details',
          label: '',
          _style: { width: '1%' },
          sorter: false,
          filter: false
        }
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
           <CDataTable style
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
                    //handles status
                    (item)=>(
                        <td>
                        <CBadge color={getBadge(item.status)}>
                            {item.status}
                        </CBadge>
                        </td>
                    ),
                        'show_details':
                        //handle show details
                        (item, index)=>{
                            return (
                            <td className="py-2">
                                <CButton
                                color="primary"
                                variant="outline"
                                shape="square"
                                size="sm"
                                onClick={()=>{toggleDetails(index)}}
                                >
                  {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
              )
              },
                'details':
                //show the details of added user
                    (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>
                    {item.username}
                  </h4>
                  <p className="text-muted">User since: {item.registered}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          }
      }}
    />
     </CCard>
  
</CContainer>
        
)}

export default TheUserManagement;