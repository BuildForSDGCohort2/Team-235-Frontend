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

const Reset = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">

        
      <CContainer>

        <CRow className="justify-content-center">
          <CCol md="2" lg="4" xl="6">
            <CCard className="mx-1">
              <CCardBody className="p-4">
                <CForm>


                   <h3>New Password</h3> 
                  <CInputGroup className="mb-1">
                    <CInputGroupPrepend>
                    <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                    </CInputGroupPrepend>   
                    <CInput type="password" placeholder="New Password" autoComplete="password" />
                  </CInputGroup>

                  </CForm>

                  <CForm> 
                 <h4>Password Confirm</h4> 
                  <CInputGroup className="mb-2">
                    <CInputGroupPrepend>
                    <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                    </CInputGroupPrepend>   
                    <CInput type="password" placeholder="Confirm Password" autoComplete="password" />
                  </CInputGroup>
          
                  <CButton color="success" block>Reset</CButton>

                </CForm>

              </CCardBody>
              
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Reset
