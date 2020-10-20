import React from "react";
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody} from "@coreui/react";

let stock = {};
const ViewStock = (props) => {

    try{
      stock = props.location.data;
      if(stock){
       localStorage.setItem("stock", JSON.stringify(stock));
      }
    }catch(e){};

    let info = JSON.parse(localStorage.getItem("stock"));
    

    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px"}}>
                     <CCardHeader className="text-center"><h4>VIEW STOCK</h4></CCardHeader>
                 
                     <CCardBody>
                      <CRow>
                        <CCol>
                         <h6>NAME</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.name}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>QUANTITY</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.quantity}</h5>
                        </CCol>
                      </CRow>

                      <CRow>
                        <CCol>
                         <h6>CATEGORIES</h6>
                        </CCol>
                        <CCol>
                         <h5>{info.categories}</h5>
                        </CCol>
                      </CRow>
                     </CCardBody>

                     <CCardFooter className="text-center"></CCardFooter>
                    
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    );
};
 
export default ViewStock;