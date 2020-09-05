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
  CCardFooter
} from '@coreui/react'

const Forgot = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">

      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="2" lg="4" xl="6">
          <CForm className="text-center">
            <CCard className="mx-1">
              <CCardHeader>
              <div> <h1>Reset Password</h1> </div>
              </CCardHeader>
              <CCardBody className="p-4" >
                  <CInputGroup className="mb-2">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>   
                    <CInput type="text" placeholder="Enter your email" autoComplete="email" />
                  </CInputGroup>
                  <CButton className="btn btn-info" style={{marginTop:"20px"}} block>Submit</CButton>
              </CCardBody>
              <CCardFooter>
                 <cilText>A link will be sent to your email to reset it</cilText>
              </CCardFooter>
            </CCard>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Forgot
