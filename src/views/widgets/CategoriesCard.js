import React from "react"
import {
  CContainer,
  CRow,
  CCol,
  CCardBody,
  CCardHeader,
  CCard
} from "@coreui/react"
import Swal from "sweetalert2"
import {gql, useQuery,useMutation} from "@apollo/client"
import CategoriesList from "./CategoriesList"



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


const CategoriesCard = () => {
  const [createCategory] = useMutation(CREATE_CATEGORY);
  const {loading, error, data} = useQuery(GET_CATEGORIES_LIST);
  try{
    if(loading){
      return "loading";
    }
  
    if(error){
      console.log(error)
    }
  
    
  }catch(e){
    console.log(e);
  }
  
 //const {name} = data;
//some hidden bug
 const show = () => {
  try{
    Swal.fire({
      inputPlaceholder: "category name",
      input: "text"
    }).then((result) => {

       if(Swal.DismissReason){
         return
       }
      
       try {
        const response = createCategory(
          {
            variables: {
              name: result.value
            },
            errorPolicy: "all"
          }
        )
        console.log(response);
       }catch(e){
         console.log(e);
       }
       
    })

  }catch(e){
    console.log(e); //use swal toast
  }
   
}

  return (
   
    < CContainer style = {{paddingTop: '2rem'}}>
      <CCard style={{marginTop: "-40px", height: "100%"}}>

        <CCardHeader className="text-center">
          <CRow>
            <CCol><h3>CATEGORIES OF STOCKS</h3></CCol>
            <CCol><button type="button" onClick={() => show()} style={{float: "right"}} className="btn btn-info">ADD NEW CATEGORY</button></CCol>
          </CRow>
         </CCardHeader>
        
        <CCardBody style={{padding: "20px"}}>
        <CRow>
                  {data.getCategories.map(item => ( 
                      <CategoriesList key={item.id} name={item.name} />
                  ))}
        </CRow> 
       </CCardBody>
      </CCard>
    </CContainer>

  )
}

export default CategoriesCard
