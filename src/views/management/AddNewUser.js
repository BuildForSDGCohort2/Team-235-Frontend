import React, {useState} from "react";
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from "@coreui/react";
import {Link} from "react-router-dom";
import { gql, useMutation, useQuery} from "@apollo/client";
import Select from "react-select"
import Swal from "sweetalert2"



const checkEmail = RegExp(/^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,5})$/);

const id = new Set();

const NEW_USER_DATA = gql`
   mutation CreateUser(
      $firstName: String!, 
      $lastName: String!,
      $email: String!, 
      $phoneNumber: String,
      $password: String!,
      $roleIds: [Int!]!
       ){
         createUser( data: {
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            phoneNumber: $phoneNumber,
            password: $password
            roleIds: $roleIds
         }){
             firstName,
             lastName,
             email,
             phoneNumber,
             createdAt
         }
      }
`;

const GET_ROLES = gql `
  query Roles{
     getRoles{
        id
        name
     }
  }
`



// const rolesId = [
//    {value: "1", label: "1"},
//    {value: "2", label: "2"},
//    {value: "3", label: "3"}
// ];

 

const isValidForm = ({...rest}) => {
   const {firstName, lastName, email, phoneNumber} = rest;
   if(firstName.length > 3 && lastName.length > 3 && checkEmail.test(email) && phoneNumber.length >= 10){
      return true;
   }

     Swal.fire("please fill all fields correctly");
     return false;
}

const NewUser = (props) =>  {

   const [createUser] = useMutation(NEW_USER_DATA);
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
 

   //fetch list of roles
   const {loading, error, data} = useQuery(GET_ROLES);
   if(loading){
      return "loading";
   }

   if(error){
      console.log(error);
   }

   const listOfRoles = [];
   Object.values(data).forEach(val => {
      val.map(item => {
          const {id, name} = item;
          listOfRoles.push({ label: name, value: id});
      });
    });


  //handle change
   const handleChange = (e) => {
      const {name, value} = e.target;
       setState({...state, [name] : value});
   }


   const handleOnSelectedOption = e => {
      setSelectedOption(e)
      Object.values(e).map(item => {
          id.add(item.value);
      })
       
      console.log(id);
      
   }
 

    const handleSubmit = async (e) =>  {
      e.preventDefault();
      
      if(isValidForm(state)){
           const {firstName, lastName, email, password, phoneNumber} = state;
           //console.log(firstName, lastName, email, phoneNumber, password);
           
           try{
             const response = await createUser({
                variables: {
                   firstName: firstName,
                   lastName: lastName,
                   email: email,
                   phoneNumber: phoneNumber,
                   password: password,
                   roleIds: Array.from(id)
                }, 
                errorPolicy: "all"
             });
             console.log(response)
            if(response){
               Swal.fire("user created")
               props.history.push("/management")
            }
           }catch(e){
             alert(e);
           }
      }   
       
     
   }

   return(
      <CContainer>
         <CRow>
            <CCol>
                  <CCard  style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px", width:"500px"}}>
                      <CCardHeader><h4>ADD NEW USER</h4></CCardHeader>
                      <form onSubmit={handleSubmit}>
                      <CCardBody>
                        
                           <div className="form-group">
                                 <label htmlFor="firstnameId">FIRST NAME</label>
                                 <input type="text" 
                                 className="form-control" 
                                 id ="firstnameId" 
                                 name="firstName"
                                 value={state.firstName || ""}
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
                                 value={state.lastName || ""}
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
                                 value={state.email || ""}
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
                                 value={state.phoneNumber || ""}
                                 onChange={handleChange}
                                 noValidate/>
                                  
                           </div>

                           <div className="form-group">
                                 <label htmlFor="passwordId">PASSWORD</label>
                                 <input type="password" 
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
                                        value={selectedOption}
                                        onChange = {handleOnSelectedOption}
                                        isMulti
                                       />
                                    </div>
                        
                      </CCardBody>
                      <CCardFooter className="text-center">
                      <CButton  type="submit" color="info" style={{width:"150px", margin:"10px"}}>SAVE</CButton>
                      <Link to="./management">
                      <CButton color="secondary" style={{width:"150px"}}>CANCEL</CButton>
                      </Link>
                      </CCardFooter>
                      </form>
                  </CCard>
            </CCol>
         </CRow>
      </CContainer>
   
   )}
export default NewUser;
