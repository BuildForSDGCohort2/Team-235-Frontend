import React from "react";
import {
    CCard,
    CDropdown,
    CCardHeader,
    CDataTable,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CContainer,
    CCardBody
  } from "@coreui/react";
  import Swal from "sweetalert2";
  //import {useQuery, gql} from "@apollo/client";
 
// const STOCKS = gql `
//   query GetStocksByCategoryId($data: Float!){
//       getStocksByCategoryId(data: {
//           data: $data
//       }){
//           id
//           name
//       }    
//     }
// `;

const CategoryStocks = (props) => {
   

    const id = props.location.data;
    if(id){
       localStorage.setItem("stockId", JSON.stringify(id));
    }
    //const stockId = JSON.parse(localStorage.getItem("stockId"));
   // const itemId = parseFloat(stockId.toString());
    

    // const {error, data} = useQuery(STOCKS, {
    //     variables: itemId
    // });

    // if(data){
    //     console.log(data);
    // }

    // if(error){
    //     console.log(error);
    // }
    
    const tableFields = [
        {key: "name"},
        {key: "quantity"},
        {key: "options"},
    ];

    const stockData = [];

    return (
        <CContainer>
        <CCard className="cards" style={{borderRadius:"5px"}}>
        <CCardHeader>  
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
              );
            }
            }}>
   
            </CDataTable>
        </CCardBody>
       </CCard>
       </CContainer>
    );
};

export default CategoryStocks;