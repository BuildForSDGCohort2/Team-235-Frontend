import React, {useEffect} from "react";
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from "@coreui/react";

const Report = (props) => {
 
    useEffect(() => {
        const token = localStorage.getItem("token");
        const tokenType = sessionStorage.getItem("tokenType");
        if(!token || !tokenType){
           props.history.push("/404");
        }
     })


    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px"}}>
                     <CCardHeader className="text-center" ><h4>STOCK REPORT</h4></CCardHeader>
                     <form>
                     <CCardBody className="mr-5 ml-5 p-5">
                           

                          
                       
                     </CCardBody>
                     <CCardFooter className="text-center">
                     <CButton  type="submit" color="info" style={{width:"150px", margin:"10px"}}>GENERATE REPORT</CButton>
                    
                     <CButton color="secondary" style={{width:"150px"}}>CANCEL</CButton>
                     
                     </CCardFooter>
                     </form>
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    );
};
 

export default Report;