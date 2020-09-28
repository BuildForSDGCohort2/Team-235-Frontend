import React from "react";
import {
    CWidgetDropdown,
    CCol
  } from "@coreui/react";


const colors = ["primary","info", "success", "danger", "warning"];


const CategoriesList = props => {
    const random = Math.floor(Math.random() * colors.length);
    return (
        <CCol sm = "6" lg = "3">
            <CWidgetDropdown style={{height: "120px",boxShadow: "2px 2px 10px gray"}} color = {colors[random]} header ={props.name} />
        </CCol> 
               
    )}


export default CategoriesList;