import React, {useState} from 'react'
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from "@coreui/react";
import Select from 'react-select'
import {Link} from 'react-router-dom'
import {gql, useQuery, useMutation} from '@apollo/client'

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

const CreateNewRole = () => {

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
        
        console.log(Array.from(ids));
        console.log(e)
    }



    const permissionList = [];
    const {loading, error, data} = useQuery(GET_PERMISSIONS);
    
    try {
        if(loading){
            return "loading";
        }
    
        if(error){
            return error;
        }
    
        Object.values(data).forEach(val => {
          val.map(item => {
            return(
                permissionList.push({id: item.id, label: item.description, value: item.value})
            ) 
          });
        });
    }catch(e){
       console.log(e);
    }
    
 



    //TODO: fix bug that pops up when user deletes the last selected item using the exit on the item itself
     

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        //write mutation and send to backend
         
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
               console.log(response)

        }catch(e){
            console.log(e)
        }
    }

  
    

    return(
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
                     <CButton  type="submit" color="info" style={{width:"150px", margin:"10px"}}>SAVE</CButton>
                     <Link to="/createrole">
                     <CButton color="secondary" style={{width:"150px"}}>CANCEL</CButton>
                     </Link>
                     </CCardFooter>
                     </form>
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    )
}

export default CreateNewRole