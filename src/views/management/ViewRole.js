import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react';
 

 


const ViewRole = () => {


    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px"}}>
                     <CCardHeader className="text-center"><h4>ROLE</h4></CCardHeader>
                     
                     <CCardBody>
                         {/**
                          * use for loop to render permission from backend
                          */}
                     <div class="form-group form-group-xs row">
                            <label class="col-6 col-form-label">Role Name </label>
                            <div class="col-6">
                                <span class="form-control-plaintext">Nurse</span>
                            </div>
                            <label class="col-6 col-form-label">Permission</label>
                            <div class="col-6">
                                <span class="form-control-plaintext">create, delete and update</span>
                            </div>
                     </div>

                          
                     </CCardBody>
                     
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    );
};


export default ViewRole;