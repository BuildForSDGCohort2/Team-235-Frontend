import React, {useState} from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from '@coreui/react';
import {Link} from 'react-router-dom';
import { gql, useMutation, useEffect} from '@apollo/client';



const checkEmail = RegExp(/^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,5})$/);

const NEW_USER_DATA = gql`
   mutation CreateUser(
      $firstName: String!, 
      $lastName: String!,
      $email: String!, 
      $phoneNumber: String!
      $password: String!,
       ){
         createUser( data: {
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            phoneNumber: $phoneNumber,
            password: $password
            
         }){
             firstName,
             lastName,
             email,
             phoneNumber,
             createdAt
         }
      }
`;



const isValidForm = ({...rest}) => {
   const {firstName, lastName, email, phone} = rest;
   if(firstName.length > 3 && lastName.length > 3 && checkEmail.test(email) && phone.length >= 10){
      return true;
   }

   return false;
}

const NewUser = (props) =>  {

   const [createUser] = useMutation(NEW_USER_DATA)

   const [state, setState] = useState({
      state : {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         phone: ""
      }
   });
 
        
  
   const handleChange = (e) => {
      const {name, value} = e.target;
       setState({...state, [name] : value})
   }

 

    const handleSubmit = async (e) =>  {
      e.preventDefault();
      
      if(isValidForm(state)){
           const {firstName, lastName, email, password, phoneNumber} = state;
           console.log(firstName, lastName, email, phoneNumber, password);
           
           try{
             const response = await createUser({
                variables: {
                   firstName: firstName,
                   lastName: lastName,
                   email: email,
                   phoneNumber: phoneNumber,
                   password: password
                }, 
                errorPolicy: "all"
             });

             console.log(response);
           }catch(e){
             alert(e)
           }
      }   
       
     
   }

   return(
      <CContainer>
         <CRow>
            <CCol>
                  <CCard className="text-center" style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px", width:"500px"}}>
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
                                 name="phone"
                                 value={state.phone || ""}
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
   
   )
 
}
export default NewUser;