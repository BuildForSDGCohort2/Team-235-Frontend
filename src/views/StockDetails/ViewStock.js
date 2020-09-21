import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from '@coreui/react';

const ViewStock = () => {
    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px"}}>
                     <CCardHeader className="text-center"><h4>VIEW STOCK</h4></CCardHeader>
                 
                     <CCardBody>
                       
                       <div class="form-group form-group-xs row">
                            <label class="col-6 col-form-label">Stock name </label>
                            <div class="col-6">
                                <span class="form-control-plaintext">Paracetamol</span>
                            </div>
                            <label class="col-6 col-form-label">Stock name </label>
                            <div class="col-6">
                                <span class="form-control-plaintext">Paracetamol</span>
                            </div>
                        </div>
                          
                       
                     </CCardBody>

                     <CCardFooter className="text-center">
                     
                     </CCardFooter>
                    
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    );
};
 
export default ViewStock;