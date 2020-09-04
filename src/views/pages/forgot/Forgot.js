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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Forgot = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">

        
      <CContainer>

        <CRow className="justify-content-center">
          <CCol md="2" lg="4" xl="6">
            <CCard className="mx-1">
              <CCardBody className="p-4">
                <CForm>


                  <div> <h1>Forgot Password</h1> </div>
                  <p>A link will be sent to your email to reset it</p>
                  <CInputGroup className="mb-2">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>   
                    <CInput type="text" placeholder="Enter your email" autoComplete="email" />
                  </CInputGroup>


                  <CButton color="success" block>Submit</CButton>
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
