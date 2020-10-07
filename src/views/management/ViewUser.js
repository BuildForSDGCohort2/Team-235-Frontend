import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody} from '@coreui/react';
let user = {};

const style = {
  backgroundColor: "white"
}

const ViewUser = props => {

try{
    user = props.location.data;
    if(user){
      localStorage.setItem("user", JSON.stringify(user));
    }
}catch(e){}
let info = JSON.parse(localStorage.getItem("user"));
 
    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard style={style}>
                    <CCardHeader className="text-center"><h2>{info.name}</h2></CCardHeader>
                 
                     <CCardBody>
                      <CRow>
                        <CCol>
                         <h6>EMAIL</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.email}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>PHONE NUMBER</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.phoneNumber}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>STATUS</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.status}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>ROLES</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.roles.map(item => (item.name.concat(" , ")))}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>BLOCKED</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.blocked.toString()}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>VERIFIED</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.isVerified.toString()}</h5>
                        </CCol>
                      </CRow>

                     </CCardBody>

                    
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    );
};

 

export default ViewUser;