import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CCardHeader,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>

        <CRow className="justify-content-center ">
          <CCol md="2" lg="4" xl="6">
          <CForm>
            <CCard className="mx-1">
              <CCardBody className="p-4 text-center" >
                <CCardHeader> 
                 <div> <h1> Reset Password </h1> </div>
                 </CCardHeader>
                     <CCardBody>
                        <CInputGroup className="mb-2">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>   
                        <CInput type="text" placeholder="Enter your email" autoComplete="email" />
                      </CInputGroup>
                     </CCardBody>
                 
                  
                  <em>A link will be sent to your email. Click to reset password</em>
                   <div>
                     <CButton color="primary" style={{width:"120px", margin:"10px"}}>Send</CButton>
                     <Link to="/">
                        <CButton color="primary" style={{width:"120px", margin:"10px"}}>Cancel</CButton>
                    </Link>
                   </div>
              </CCardBody>
            </CCard>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Forgot
