import React from 'react';
import {CContainer,CRow,CCol,CCard,CCardHeader,CCardBody,CCardFooter} from '@coreui/react'

export default class List extends React.Component{
    render(){
        return(
            <div>
            <CContainer>
                <CRow>
                <CCol>
                    <CCard style={{borderRadius:"5px", boxShadow:"1px 1px 3px gray"}}>
                    <CCardHeader>
                       <CRow>
                       <CCol sm = "3">{this.props.firstName}</CCol>
                       <CCol sm = "3">{this.props.lastName}</CCol>
                       <CCol sm = "3">{this.props.email}</CCol>
                       <CCol sm = "3">{this.props.phone}</CCol>
                       </CRow>
                    </CCardHeader>
                    </CCard>
                </CCol>
                </CRow>
            </CContainer>

            </div>
        )
    }
}