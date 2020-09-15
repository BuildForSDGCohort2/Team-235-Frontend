import React, {useEffect}  from 'react'
import {
            CCard,
            CCardHeader,
            CCardBody,
            CCardFooter,
            CContainer,
            CButton,
            CInputGroup,
            CInputGroupPrepend,
            CInputGroupText,
            CInput,
            CDataTable,
            CDropdown,
            CDropdownItem, 
            CDropdownMenu,
            CDropdownToggle,
        } from '@coreui/react'

import {CIcon} from '@coreui/icons-react'
import {Link} from 'react-router-dom'

 

 const StockDetails = (props) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
       props.history.push('/404');
    }
 })


    const stockData = [
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"},
        {name: "Paracetamol", dateAdded: "23/03/2020", lastUpdated:"04/07/2019", categories: "Drugs"}
    ]

    const tableFields = [
        {key: "name"},
        {key: "dateAdded"},
        {key: "lastUpdated"},
        {key: "categories"},
        {key: "actions"},
        
    ]

     return(
        <CContainer>
        <CCard className="text-center" style={{borderRadius:"5px"}}>
        <CCardHeader> 
          <Link to='/addstock'>
            <CButton className="btn btn-info" style={{float:"right"}}>ADD NEW STOCK</CButton>
          </Link>  
            <CButton className="btn btn-info" style={{float:"right", marginRight:"10px"}}>UPDATE EXISTING STOCK</CButton>
                    <CInputGroup style={{width:"30%", float:"left"}}>
                     <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Search" />
                    </CInputGroup>
        </CCardHeader>

        <CCardBody>
            <CDataTable
            items={stockData}
            fields={tableFields}
            scopedSlots = {{
              'actions':
              () => {
                  return (
                  <td className="py-2">
                      <CDropdown>
                        <CDropdownToggle>more</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem>update</CDropdownItem>
                            <CDropdownItem>delete</CDropdownItem>
                            <CDropdownItem>update</CDropdownItem>
                            <CDropdownItem>view facets</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                  </td>
              )}
            }}>
   
            </CDataTable>
        </CCardBody>

        <CCardFooter><h1>CARD FOOTER</h1></CCardFooter>
       </CCard>
       </CContainer>
     )
 }

 export default StockDetails