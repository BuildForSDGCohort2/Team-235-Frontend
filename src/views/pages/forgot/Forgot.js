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
<<<<<<< HEAD
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
=======
>>>>>>> e77f997b3c9a481c02d976d918a864391144ce3b

const Forgot = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">

      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="2" lg="4" xl="6">
          <CForm className="text-center">
            <CCard className="mx-1">
<<<<<<< HEAD
              <CCardBody className="p-4">
                <CForm>


                 <h1>Forgot Password</h1>   
=======
              <CCardHeader>
              <div> <h1>Reset Password</h1> </div>
              </CCardHeader>
              <CCardBody className="p-4" >
>>>>>>> e77f997b3c9a481c02d976d918a864391144ce3b
                  <CInputGroup className="mb-2">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>   
                    <CInput type="text" placeholder="Enter your email" autoComplete="email" />
                  </CInputGroup>
<<<<<<< HEAD

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




             


=======
                  <CButton className="btn btn-info" style={{marginTop:"20px"}} block>Submit</CButton>
              </CCardBody>
              <CCardFooter>
                 <cilText>A link will be sent to your email to reset it</cilText>
              </CCardFooter>
>>>>>>> e77f997b3c9a481c02d976d918a864391144ce3b
            </CCard>
            </CForm>
          </CCol>
        </CRow>
        
        
      </CContainer>
    </div>
  )
}

export default Forgot
