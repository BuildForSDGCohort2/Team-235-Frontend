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
      return `${Swal.fire({
        html: "Fetching categories...",
        timer: 2000,
        toast: true,
        position: "top",
        showConfirmButton: false,
        icon: "info"
     })}`;
    }
  
    if(error){
      Swal.fire({
        title: "Network problem",
        html: "cannot display list of categories",
        timer: 2000,
        toast: true,
        position: "top",
        showConfirmButton: false,
        icon: "error"
     })
    }
  
  }catch(e){
    console.log(e);
  }
  
 const show =  async () => {
  try{
    const {value: name} = await Swal.fire({
      input: "text",
      inputPlaceholder: "enter category name"
    })

    if(name){
      const response = createCategory(
              {
                variables: {
                  name: name
                },
                errorPolicy: "all"
              }
            )
        if((await response).data){
          Swal.fire({
            html:(await response).data.createCategory.name + " created successfully" ,
            timer: 2000,
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
         })
        } 
    }

  }catch(e){
    console.log(e); //use swal toast
  }
   
}

  return (
   
    < CContainer style = {{paddingTop: '2rem'}}>
      <CCard style={{marginTop: "-40px", height: "100%"}}>

        <CCardHeader className="text-center">
          <CRow>
            <CCol><h3 id="cat">CATEGORIES OF STOCKS</h3></CCol>
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
