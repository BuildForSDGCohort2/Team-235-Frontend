import React, {useEffect}  from "react";
import {
            CCard,
            CCardHeader,
            CCardBody,
            CContainer,
            CButton,
            CInputGroup,
            CInputGroupPrepend,
            CInputGroupText,
            CInput,
            CDataTable,
            CDropdown,
            CDropdownItem, 
            CDropdownMenu,
            CDropdownToggle,
        } from "@coreui/react";

import {CIcon} from "@coreui/icons-react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {gql, useQuery} from "@apollo/client";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
 

let block = true;

const STOCKS = gql`
   query GetStocks {
     getStocks{
        id
        name
        quantity
        categories{
          id
          name
        }
        createdAt
        }
   }
`

 

 const StockDetails = (props) => {
  const {error, data} = useQuery(STOCKS, {
    notifyOnNetworkStatusChange : true
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenType = sessionStorage.getItem("tokenType");
    if(!token || !tokenType){
       props.history.push("/404");
    }
 });


    
    
    const stockData = [];



    const tableFields = [
        {key: "name"},
        {key: "quantity"},
        {key: "categories"},
        {key: "options"},
    ];

    const displayCategories = (categories) => {
      let i = [];
      categories.map(item => {
        return(
          i.push(item.name)
        )
      }) ;  
      
      return i;
    }
 

    try{
       
   
     
      if(error) return alert(error);

      if(data){
        block = false;
        
        data.getStocks.map(item => {
          const {name, quantity, categories} = item;
          const listOfCategories = displayCategories(categories);
          
          return(
            stockData.push({name, quantity, categories: listOfCategories.toString()})
          )
        })
      }
     
    }catch(e){}

     return(
       <BlockUi message="Please wait...." blocking={block}>
        <CContainer>
        <CCard className="cards" style={{borderRadius:"5px"}}>
        <CCardHeader> 
          <Link to="/addstock">
            <CButton className="btn btn-info" style={{float:"right"}}>ADD NEW STOCK</CButton>
          </Link>  
                    <CInputGroup style={{width:"30%", float:"left"}}>
                     <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-magnifying-glass"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Search" />
                    </CInputGroup>
        </CCardHeader>

        <CCardBody>
            <CDataTable
            items={stockData}
            fields={tableFields}
            striped
            hover
            responsive
            sorter
            pagination
            itemsPerPageSelect
            itemsPerPage = {10}
            scopedSlots = {{
              "options":
              () => {
                  return (
                  <td className="py-2">
                      <CDropdown>
                        <CDropdownToggle>Actions</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem>Update</CDropdownItem>
                            <CDropdownItem onClick = {() => 
                               Swal.fire({
                                title: "Title",
                                text: "ARE YOU SURE YOU WANT TO DELETE",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText:"YES",
                                cancelButtonText: "NO"
                             })
                            }
                            >Delete</CDropdownItem>
                            <CDropdownItem onClick = {() => props.history.push("/viewstock")}>View</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                  </td>
              )}
            }}>
   
            </CDataTable>
        </CCardBody>
       </CCard>
       </CContainer>
       </BlockUi>
     );
 };

 export default StockDetails;