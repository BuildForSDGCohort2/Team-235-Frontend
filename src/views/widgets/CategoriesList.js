import React from "react";
import {
    CWidgetDropdown,
    CCol,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle
  } from "@coreui/react";
import {useQuery, gql} from "@apollo/client";
import CIcon from "@coreui/icons-react";
import {withRouter} from "react-router-dom";

const colors = ["gradient-primary","gradient-info", "gradient-success", "gradient-danger", "gradient-warning"];

// const STOCKS = gql `
//   query GetStocks($id: Float!) {
//       getStocksByCategoryId(data: {
//           $id
//       })
//       {
//           id
//           name
//       }
//   }
// `;




const CategoriesList = (props) => {
  
 
    // const {error, data}  = useQuery(STOCKS, {
    //     variables: getId()
    // });

    // if(error){
    //     console.log(error);
    // }

    // if(data){
    //     console.log(data);
    // }

    
   
    const random = Math.floor(Math.random() * colors.length);
   
    return (
        <CCol sm = "6" lg = "3">
           <CWidgetDropdown 
            style={{height: "130px", 
            boxShadow: "2px 2px 10px gray", 
            cursor: "pointer"}} 
            color = {colors[random]} 
            header ={props.name}
            id = {props.id}
            >
              <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem
              onClick={() => props.history.push({
                pathname: "/categorystocks",
                data: props.id
              })}>
              View
              </CDropdownItem>
              <CDropdownItem>Edit</CDropdownItem>
              <CDropdownItem>Delete</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          </CWidgetDropdown>
        </CCol> 
               
    )}
export default withRouter(CategoriesList);