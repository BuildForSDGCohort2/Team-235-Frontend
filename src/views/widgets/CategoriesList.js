import React from 'react';
import {
    CWidgetDropdown,
    CContainer,
    CRow,
    CCol,
    CCardBody,
    CCardHeader,
    CCard
  } from "@coreui/react"


const colors = ["primary","info", "success", "danger", "warning"];


const CategoriesList = props => {
    const random = Math.floor(Math.random() * colors.length);
    return (
      
        <CCol sm = "6" lg = "3" >
            <CWidgetDropdown style={{height: "120px"}} color = {colors[random]} header = {props.name} />
        </CCol> 
               
    );
};


export default CategoriesList;