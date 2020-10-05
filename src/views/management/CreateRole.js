import React, {useState} from "react";
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from "@coreui/react";
import Select from "react-select";
import {Link} from "react-router-dom";
import {gql, useQuery, useMutation} from "@apollo/client";
import Swal from "sweetalert2";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

let block = true;

const GET_PERMISSIONS = gql `
   query permissions {
       getPermissions{
           id
           value
           description
       }
   }
`

const CREATE_ROLE_MUTATION = gql`
 mutation CreateRole($name: String!, $description: String!, $permissionIds: [Int!]!){
     createRole(data: {
         name: $name,
         description: $description,
         permissionIds: $permissionIds 
     }){
         id
         name
         description
         createdAt
        permissions{
             id
             value
             description 
         }
     }
 }
`


const ids = new Set();

const CreateNewRole = (props) => {

   const [createRole] = useMutation(CREATE_ROLE_MUTATION);
   const [selectedValue, setSelectedValue] = useState(null)
   

   const [state, setState] = useState({
       state :{
         name: "",
         description: ""
       }
   });


    const handleChange = e => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    }


    const handleSelectedValue = e => {
        setSelectedValue(e);
         
        Object.values(e).map(item => {
            return(
                ids.add(item.id)
            )
        })
    }



    const permissionList = [];
    const {error, data} = useQuery(GET_PERMISSIONS);
    
    try {
        
    
        if(error){
            block = false;
            Swal.fire({
                title: "cannot create roles",
                html: "check internet connection or contact admin for authorization",
                icon: "warning",
                showConfirmButton: false,
                timer: 3000
              })
        };
    
        
        if(data){
        block = false;
        Object.values(data).forEach(val => {
          val.map(item => {
            return(
                permissionList.push({id: item.id, label: item.description, value: item.value})
            ) 
          });
        });
       } 
    }catch(e){
       console.log(e);
    }
    
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        const button = document.getElementById("button");
        button.innerHTML = "CREATING ROLE...";
         
        try{
           const response = await createRole(
               {
                   variables: {
                      name: state.name,
                      description: state.description,
                      permissionIds: Array.from(ids)
                   },
                   errorPolicy: "all"
               });

               if(response.data){
                   button.innerHTML = "SAVE";
                Swal.fire({
                    html: "role created successfully",
                    timer: 2000,
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    icon: "success"
                 }) 
                 props.history.push("/permission");
               }else{
                
                button.innerHTML = "SAVE";
                const errorMessage = response.errors[0].message.message;
                Swal.fire({
                   html: errorMessage,
                   timer: 2000,
                   toast: true,
                   position: "top",
                   showConfirmButton: false,
                   icon: "error"
                }) 
               }

        }catch(e){
            button.innerHTML = "SAVE";
            Swal.fire({
                html: e,
                timer: 2000,
                toast: true,
                position: "top",
                showConfirmButton: false,
                icon: "error"
             }) 
            }
        }

    
    

    return(
        <BlockUi tag="div" message= "Please wait..." blocking={block}>
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px"}}>
                     <CCardHeader className="text-center" ><h4>ADD NEW ROLE</h4></CCardHeader>
                     <form onSubmit={handleSubmit}>
                     <CCardBody className="mr-5 ml-5 p-5">
                          <div className="form-group">
                                <label htmlFor="firstnameId">ROLE NAME</label>
                                <input type="text" 
                                className="form-control" 
                                id ="firstnameId" 
                                name="name"
                                value={state.name || ""}
                                onChange={handleChange}
                                required
                                noValidate/>
                               
                          </div>

                          <div className="form-group">
                                <label htmlFor="descriptionId">DESCRIPTION</label>
                                <textarea style={{height: "115px"}} type="text" 
                                className="form-control" 
                                id ="descriptionId" 
                                name="description"
                                value={state.description || ""}
                                onChange={handleChange}
                                noValidate/>
                               </div>
                           
                          <div className="form-group">
                                       <label htmlFor="permissionIds">PERMISSIONS</label>
                                       <Select type="text" 
                                       options = {permissionList}
                                       isMulti
                                       isSearchable
                                       onChange={handleSelectedValue}
                                       value={selectedValue}
                                        />
                                   </div>
                       
                     </CCardBody>
                     <CCardFooter className="text-center">
                     <CButton id="button" type="submit" color="info" style={{width:"150px", margin:"10px"}}>SAVE</CButton>
                     <Link to="/permission">
                     <CButton color="secondary" style={{width:"150px"}}>CANCEL</CButton>
                     </Link>
                     </CCardFooter>
                     </form>
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
     </BlockUi> 
    )};

export default CreateNewRole