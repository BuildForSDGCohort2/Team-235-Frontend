import React, {useState} from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from "@coreui/react";
import Select from "react-select";
import {Link} from "react-router-dom";
import { gql, useMutation} from "@apollo/client";
import Swal from "sweetalert2";

const UPDATE_USER = gql ` 
  mutation UpdateUser(
      $firstName: String,
      $lastName: String,
      $email: String,
      $phoneNumber: String,
      $id: String!
  ){
      updateUser(data: {
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        phoneNumber: $phoneNumber,
        id: $id
      }){
          firstName
          lastName
          email
          phoneNumber
      }
  }
`;


const listOfRoles = [];
let user = {};

 
const UpdateUser = (props) => {

    const [updateUser] = useMutation(UPDATE_USER);

    user = props.location.data;
    if(user){
        localStorage.setItem("user", JSON.stringify(user));
    }
    let info = JSON.parse(localStorage.getItem("user"));
    const firstName = info.name.split(" ")[0].toString();
    const lastName = info.name.split(" ")[1].toString();
 

    const [selectedOption, setSelectedOption] = useState(null);

    const [state, setState] = useState({
        state : {
           firstName: "",
           lastName: "",
           email: "",
           password: "",
           phoneNumber: ""
        }
     });

    const handleChange = (e) => {
       const {name, value} = e.target;
       setState({...state, [name] : value});
     }

      

    const handleSubmit = async (e) => {
        e.preventDefault();
        const button = document.getElementById("button");
        button.innerHTML = "UPDATING USER...";
        try {
            const response = await updateUser({
                variables: {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    phoneNumber: state.phoneNumber,
                    id: info.id
                },
                errorPolicy: "all"
            })

            if(response.data){
                button.innerHTML = "UPDATE";
                 Swal.fire({
                     toast: true,
                     timer: 2000,
                     title: "User updated",
                     html: "sucessfully",
                     icon: "info",
                     position: "top",
                     showConfirmButton: false
                 });
                 props.history.push("/management");
            }
        } catch (e) {
            handleAndDisplayError(e, button);
        }
         
    }

    const handleAndDisplayError = (e, button) => {
        /**
         * Based on error messages from the server
         * The first words are taken and error are displayed accordingly
         * Eg. "Failed to fetch" means there is a network problem....so based on that "check your connection" message is displayed to user
         */
        
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


    const handleOnSelectedOption = e => {
        setSelectedOption(e);
     }



    return (
        <CContainer>
        <CRow>
           <CCol>
                 <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px", width:"500px"}}>
                     <CCardHeader className="text-center"><h4>UPDATE USER</h4></CCardHeader>
                     <form onSubmit={handleSubmit}>
                     <CCardBody>
                       
                          <div className="form-group">
                                <label htmlFor="firstnameId">FIRST NAME</label>
                                <input type="text" 
                                className="form-control" 
                                id ="firstnameId" 
                                name="firstName"
                                defaultValue={firstName || ""}
                                onChange={handleChange}
                                required
                                noValidate/>
                          </div>
                           

                          <div className="form-group">
                                <label htmlFor="lastnameId">LAST NAME</label>
                                <input type="text" 
                                className="form-control" 
                                id="lastnameId" 
                                name="lastName"
                                defaultValue={lastName || ""}
                                onChange={handleChange}
                                required
                                noValidate/>
                                 
                          </div>

                          <div className="form-group">
                                <label htmlFor="emailId">EMAIL</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="emailId"
                                name="email"
                                defaultValue={info.email || ""}
                                onChange={handleChange}
                                noValidate
                                required/>
                                 
                          </div>

                          <div className="form-group">
                                <label htmlFor="phoneId">PHONE</label>
                                <input type="phone" 
                                className="form-control" 
                                id="phoneId"
                                name="phoneNumber"
                                defaultValue={info.phoneNumber || ""}
                                onChange={handleChange}
                                noValidate/>
                                 
                          </div>

                          <div className="form-group">
                                <label htmlFor="passwordId">PASSWORD</label>
                                <input type="password" 
                                disabled
                                className="form-control" 
                                id="passwordId"
                                name="password"
                                value={state.password || ""}
                                onChange={handleChange}
                                noValidate/>
                                 
                          </div>

                          <div className="form-group">
                                       <label htmlFor="categoriesId">ADD ROLE</label>
                                       <Select type="text" 
                                       options = {listOfRoles}
                                       defaultValue= {selectedOption}
                                       onChange = {handleOnSelectedOption}
                                       isMulti
                                       isClearable
                                       disabled = {true}
                                       isSearchable
                                      />
                                   </div>
                       
                     </CCardBody>
                     <CCardFooter className="text-center">
                     <CButton id="button" type="submit" color="info" style={{width:"150px", margin:"10px"}}>UPDATE</CButton>
                     <Link to="./management">
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

 

export default UpdateUser;