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
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">

        
      <CContainer>

        <CRow className="justify-content-center">
          <CCol md="2" lg="4" xl="6">
            <CCard className="mx-1">
              <CCardBody className="p-4">
                <CForm>


                 <h1>Forgot Password</h1>   
                  <CInputGroup className="mb-2">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>   
                    <CInput type="text" placeholder="Enter your email" autoComplete="email" />
                  </CInputGroup>

                  <Link to= "./reset"> 
                  <CButton color="primary" block>Click</CButton>
                  </Link>
                </CForm>
              </CCardBody>

              <CCard className="text-white bg-info py-6 d-md-right-none" style={{ width: '24%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>You have NO Account?</h2>
                    <p> Click on the link below</p>
                    <Link to="/register">
                      <CButton color="info" className="mt-2" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>

                  


                </CCardBody>
              </CCard>

              <CCard className="text-white bg-info py-6 d-md-right-none" style={{ width: '24%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Login</h2>
                    <p> Click on the link below</p>
                    <Link to="/login">
                      <CButton color="info" className="mt-2" active tabIndex={-1}>Login!</CButton>
                    </Link>
                  </div>

                  


                </CCardBody>
              </CCard>




             


            </CCard>
          </CCol>
        </CRow>
        
        
      </CContainer>
    </div>
  )
}

export default Forgot
