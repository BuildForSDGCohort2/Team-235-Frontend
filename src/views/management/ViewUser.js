import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody} from '@coreui/react';
 


const ViewUser = props => {
   
    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px", width:"500px"}}>
                     <CCardHeader><h4>VIEW USER</h4></CCardHeader>
                 
                     <CCardBody>
                       
                     

                          
                       
                     </CCardBody>

                     <CCardFooter className="text-center">
                     
                     </CCardFooter>
                    
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    );
};

 

export default ViewUser;