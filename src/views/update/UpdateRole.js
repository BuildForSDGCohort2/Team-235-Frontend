import React, {useState} from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from "@coreui/react";
import Select from "react-select";
import {Link} from "react-router-dom";
import {gql, useMutation} from "@apollo/client";
import Swal from "sweetalert2";


const UPDATE_ROLE = gql `
  mutation UpdateRole(
      $id: Float!,
      $name: String,
      $description: String
  ){
      updateRole(data: {
          id: $id,
          name: $name,
          description: $description
      }){
          name
          description
      }
  }
`;

let userRole = {};
const currentRolePermissions = [];

const UpdateRole = (props) => {

userRole = props.location.data;
if(userRole){
    localStorage.setItem("role", JSON.stringify(userRole));
}
let info = JSON.parse(localStorage.getItem("role"));

info.permission.map(item => {
    return(
        currentRolePermissions.push({label: item.description, value: item.id})
    )
})
 

const [updateRole] = useMutation(UPDATE_ROLE);
//const [selectedValue, setSelectedValue] = useState(null);
const [state, setState] = useState({
    state: {
        name: "" ,
        description: ""
    }
});



const handleChange = (e) => {
   const {name, value} = e.target;
   setState({...state, [name]: value});
}

// const handleSelectedValue = (e) => {
//     setSelectedValue(e);
// };

const handleAndDisplayError = (e, button) => {
    button.innerHTML = "UPDATE";

    var firstWordInErrorMessage = JSON.stringify(e.message).replace(/ .*/,'"');
    switch(JSON.parse(firstWordInErrorMessage)){
      case "Failed": 
        Swal.fire({
          toast: true,
          title: "network problem",
          html: "check your internet connection",
          icon: "warning",
          timer: 2000,
          position: "top",
          showConfirmButton: false
        });
        break;
  
      case "Response":
        Swal.fire({
          toast: true,
          title: "Fill all fields",
          html: "correctly",
          icon: "warning",
          timer: 2000,
          position: "top",
          showConfirmButton: false,
          width: "480px"
        });
        break;
  
      default: 
         break;
  }

}


const handleSubmit = async (e) => {
   e.preventDefault();
   
   const button = document.getElementById("button");
   button.innerHTML = "UPDATING ROLE...";
   const roleId = parseFloat(info.id);
  
   try {
       const response = await updateRole({
           variables: {
               id: roleId,
               name: state.name,
               description: state.description
           },
           errorPolicy: "all"
       });


       if(response.data){
           button.innerHTML = "UPDATE";
           Swal.fire({
            toast: true,
            timer: 2000,
            title: "Role updated",
            html: "sucessfully",
            icon: "info",
            position: "top",
            showConfirmButton: false
        });
        props.history.push("/permission");
       }

       if(response.errors){
           button.innerHTML = "UPDATE";
           Swal.fire({
               toast: true,
               title: "Error",
               html: response.errors[0].message.message,
               showConfirmButton: false,
               position: "top",
               timer: 2000,
               icon: "error"
           })
       }

        
   } catch (e) {
        handleAndDisplayError(e, button);
   }

     

}

    

    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px"}}>
                     <CCardHeader className="text-center" ><h4>UPDATE ROLE</h4></CCardHeader>
                     <form onSubmit={handleSubmit}>
                     <CCardBody className="mr-5 ml-5 p-5">
                          <div className="form-group">
                                <label htmlFor="firstnameId">ROLE NAME</label>
                                <input type="text" 
                                className="form-control" 
                                id ="firstnameId" 
                                name="name"
                                defaultValue={info.role || ""}
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
                                defaultValue={info.description || ""}
                                onChange={handleChange}
                                noValidate/>
                               </div>
                           
                          <div className="form-group">
                                <label htmlFor="permissionIds">PERMISSIONS</label>
                                <Select type="text" 
                                isMulti
                                isSearchable
                                // onChange={handleSelectedValue}
                                defaultValue={currentRolePermissions}
                                isClearable
                                />
                            </div>
                       
                     </CCardBody>
                     <CCardFooter className="text-center">
                     <CButton id="button" type="submit" color="info" style={{width:"150px", margin:"10px"}}>UPDATE</CButton>
                     <Link to="/permission">
                     <CButton color="secondary" style={{width:"150px"}}>CANCEL</CButton>
                     </Link>
                     </CCardFooter>
                     </form>
                 </CCard>
           </CCol>
        </CRow>
     </CContainer>
    );
 
};

export default UpdateRole;