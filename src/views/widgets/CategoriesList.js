import React from "react";
import {
    CWidgetDropdown,
    CCol
  } from "@coreui/react";
 

const colors = ["gradient-primary","gradient-info", "gradient-success", "gradient-danger", "gradient-warning"];


const CategoriesList = props => {
    const random = Math.floor(Math.random() * colors.length);
    return (
        <CCol sm = "6" lg = "3">
            <CWidgetDropdown style={{height: "130px",boxShadow: "2px 2px 10px gray", cursor: "pointer"}} color = {colors[random]} header ={props.name} />
        </CCol> 
               
    )}
export default CategoriesList;