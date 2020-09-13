import React from 'react'
import {
  CCol,
  CContainer,
  CRow
} from '@coreui/react'

const Page404 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h2 className="pt-3">Oops! You{'\''}are UNAUTHORIZED.</h2>
              <p className="text-muted float-left">The page you are looking for is hidden.</p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
