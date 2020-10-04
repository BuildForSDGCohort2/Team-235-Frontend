import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react';
 

 
let role = {};

const ViewRole = (props) => {

    try{
        role = props.location.data;
        if(role){
          localStorage.setItem("role", JSON.stringify(role));
          console.log(role);
        }
    }catch(e){}
    let info = JSON.parse(localStorage.getItem("role"));

    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px"}}>
                     <CCardHeader className="text-center"><h3>{info.role}</h3></CCardHeader>
                     
                     <CCardBody>                      
                      <CRow>
                        <CCol>
                         <h6>CREATED AT</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.createdBy}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>DESCRIPTION</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.description}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>PERMISSIONS</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.permission.map(item => (item.description.concat(" , ")))}</h5>
                        </CCol>
                      </CRow>
                     </CCardBody>
                     
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    );
};


export default ViewRole;