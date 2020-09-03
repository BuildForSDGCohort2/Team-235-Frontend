import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from '@coreui/react';
import {Link} from 'react-router-dom'
 

const checkEmail = RegExp(/^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,5})$/);

const isValidForm = ({...rest}) => {
   const {firstName, lastName, email, phone} = rest;
   if(firstName.length > 3 && lastName.length > 3 && checkEmail.test(email) && phone.length >= 10){
      return true;
   }

   return false;
}

class NewUser extends React.Component{

   constructor(props){
      super(props);
      
      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         phone: '',
         errorMessages : {
           firstNameError:'',
           lastNameError: '',
           emailError: '',
           phoneError: ''
         }
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
   }
        
  
    handleChange(e){

      const {name, value} = e.target;
      const error = this.state.errorMessages;

      switch(name){
         case "firstName":
            error.firstNameError = value.length < 3 && value.length > 0 ? "minimum of 3 characters required" : "";
         break;

         case "lastName":
            error.lastNameError = value.length < 3 && value.length > 0 ? "minimum of 3 characters required" : "";
         break;

         case "email":
            error.emailError = !checkEmail.test(value) && value.length > 0 ? "email must be valid" : "";
         break;

         case "phone":
            error.phoneError = value.length < 10 && value.length > 0 ? "number must be at least 10 digits" : "";
         break;

         default:
            break;

      }

       this.setState({error,[name] : value})
   }

     handleSubmit(e){
      e.preventDefault();
      
      if(isValidForm(this.state)){
           const {firstName, lastName, email, phone} = this.state;
           console.log(firstName, lastName, email, phone);
      }else{
         alert("form is not valid")
      }
       
     
   }

  

   render(){
  const {errorMessages} = this.state;
 
   return(
      <CContainer>
         <CRow>
            <CCol>
                  <CCard className="text-center" style={{marginTop:"65px",marginLeft:"auto", marginRight:"auto", borderRadius:"10px", width:"500px"}}>
                      <CCardHeader><h4>ADD NEW USER</h4></CCardHeader>
                      <form onSubmit={this.handleSubmit}>
                      <CCardBody>
                        
                           <div className="form-group">
                                 <label htmlFor="firstnameId">FIRST NAME</label>
                                 <input type="text" 
                                 className="form-control" 
                                 id ="firstnameId" 
                                 name="firstName"
                                 value={this.state.firstName || ''}
                                 onChange={this.handleChange}
                                 required
                                 noValidate/>
                                 {errorMessages.firstNameError.length > 0 && (
                                    <small style={{color:"red"}}>{errorMessages.firstNameError}</small>
                                 )}
                           </div>
                            

                           <div className="form-group">
                                 <label htmlFor="lastnameId">LAST NAME</label>
                                 <input type="text" 
                                 className="form-control" 
                                 id="lastnameId" 
                                 name="lastName"
                                 value={this.state.lastName}
                                 onChange={this.handleChange}
                                 required
                                 noValidate/>
                                  {errorMessages.lastNameError.length > 0 && (
                                    <small style={{color:"red"}}>{errorMessages.lastNameError}</small>
                                 )}
                           </div>

                           <div className="form-group">
                                 <label htmlFor="emailId">EMAIL</label>
                                 <input 
                                 type="email" 
                                 className="form-control" 
                                 id="emailId"
                                 name="email"
                                 value={this.state.email}
                                 onChange={this.handleChange}
                                 noValidate
                                 required/>
                                  {errorMessages.emailError.length > 0 && (
                                    <small style={{color:"red"}}>{errorMessages.emailError}</small>
                                 )}
                           </div>

                           <div className="form-group">
                                 <label htmlFor="phoneId">PHONE</label>
                                 <input type="phone" 
                                 className="form-control" 
                                 id="phoneId"
                                 name="phone"
                                 value={this.state.phone}
                                 onChange={this.handleChange}
                                 noValidate/>
                                  {errorMessages.phoneError.length > 0 && (
                                    <small style={{color:"red"}}>{errorMessages.phoneError}</small>
                                 )}
                           </div>
                           
                        
                      </CCardBody>
                      <CCardFooter className="text-center">
                      <CButton  type="submit" color="info" style={{width:"150px", margin:"10px"}}>SAVE</CButton>
                      <Link to='./management'>
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
}
export default NewUser;