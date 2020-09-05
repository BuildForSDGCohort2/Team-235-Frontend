import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  //CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CCardHeader
} from '@coreui/react'

import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">

        
      <CContainer>

        <CRow className="justify-content-center ">
          <CCol md="2" lg="4" xl="6">
            <CCard className="mx-1">
              <CCardBody className="p-4">
                <CForm>
                    <CCardHeader className="bg-info"> 
                 <div> <h1>Forgot Password</h1>  </div>
                 </CCardHeader>
                 
                 <CCard className="text-white bg-info py-6 d-md-right-none" style={{ width: '100%'}}>  
                     <CCardBody>

                     <CInputGroup className="mb-2">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>   
                    <CInput type="text" placeholder="Enter your email" autoComplete="email" />
                  </CInputGroup>


                     </CCardBody>
                 </CCard>
                  

                  

                  <Link to= "./reset"> 
                  <CButton color="primary" block style={{ width: '24%', alignItems: "self-end"  }} >Proceed</CButton>
                  </Link>

                  <Link to="/login">
                      <CButton color="danger" className="mt-2" active tabIndex={-1} style={{ width: '24%' }} >Cancel!</CButton>
                    </Link>
                    

                </CForm>
              </CCardBody>
              
              
                    
                 
              
              
            </CCard>




          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Forgot
