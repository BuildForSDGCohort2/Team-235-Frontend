import React from "react";
import {
  CContainer,
  CRow,
  CCol,
  CCardBody,
  CCardHeader,
  CCard
} from "@coreui/react";
import Swal from "sweetalert2";
import {gql, useQuery,useMutation} from "@apollo/client";
import CategoriesList from "./CategoriesList";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";



const GET_CATEGORIES_LIST = gql `
   query CategoriesList{
       getCategories{
         id
         name
         createdAt
       }
   }
`

const CREATE_CATEGORY = gql `
  mutation CreateCategory($name: String!){
    createCategory(data: {
      name: $name
    }){
      id
      name
      createdAt
    }
  }
`

let block = false;



const CategoriesCard = () => {

  const [createCategory] = useMutation(CREATE_CATEGORY);
  const { error, data} = useQuery(GET_CATEGORIES_LIST);


  

  // function triggers when user click on add new category button
 const show =  async () => {
  try{
    const {value: name} = await Swal.fire({
      input: "text",
      inputPlaceholder: "enter category name"
    });

    if(name){
      const response = createCategory(
              {
                variables: {
                  name
                },
                errorPolicy: "all"
              });
        if((await response).data){
          Swal.fire({
            html:(await response).data.createCategory.name + " created successfully" ,
            timer: 3000,
            toast: true,
            position: "top",
            showConfirmButton: false,
            icon: "success"
         })
        }else{
          Swal.fire({
            html: (await response).errors,
            timer: 2000,
            toast: true,
            position: "top",
            showConfirmButton: false,
            icon: "error"
         });
        } 
    }

  }catch(e){
    console.log(e);  
  }
   
}



 

  const displayCategories = (data, error) => {
   

    try{
      Swal.fire({
        toast: true,
        title: "Please wait",
        html: "loading...",
        position: "top",
        icon: "info",
        showConfirmButton: false
      })

    if (data) {
      Swal.close();
      return (
        data.getCategories.map(item => {
          return(
            <CategoriesList key={item.id} name={item.name} />
          )
        } 
          
      )
     )}; 

     if(error){
      Swal.fire({
        title: "Cannot display categories",
        html: "check internet connection or contact admin for authorization",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
    }

    } catch (e){}
  }

  return (
    <>
    <BlockUi tag="div" blocking={block} message ="Please wait...">
    < CContainer style = {{paddingTop: '2rem'}}>
      <CCard style={{marginTop: "-40px", height: "100%"}} >

        <CCardHeader className="text-center">
          <CRow>
            <CCol><h3 id="cat">CATEGORIES OF STOCKS</h3></CCol>
            <CCol><button type="button" onClick={() => show()} style={{float: "right"}} className="btn btn-info">ADD NEW CATEGORY</button></CCol>
          </CRow>
         </CCardHeader>
        
        <CCardBody style={{padding: "20px"}}>
        <CRow>
              {displayCategories(data, error, block)}  
        </CRow> 
       </CCardBody>
      </CCard>
    </CContainer>
    </BlockUi>
    </>
)};

export default CategoriesCard;
