import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {gql, useMutation} from "@apollo/client";
import Swal from "sweetalert2";
 

const ADMIN_DATA = gql`
mutation Signin($email: String!, $password: String!){
  signin( data: {email: $email, password: $password})
  {
    accessToken
    tokenType
  }
}
`;



const Login = (props) => {
  const [signin] = useMutation(ADMIN_DATA);
      const [state, setState] = useState({
        state:{
          email: "",
          password: "",
        }
    });

    function handleChange(e){
      const {name, value} = e.target;
      setState({...state,
        [name]: value
      });
    }

 
 
  const handleSubmit =  async (e) => {
    e.preventDefault();
    const {email, password} = state;

    if(email === null || password == null) {
      Swal.fire({
        title: "Empty Fields",
        html: "please fill all fields",
        timer: 2000,
        toast: true,
        position: "top",
        showConfirmButton: false,
        icon: "info"
     })
        return;
    }
    

    try {
      const response = await signin(
          {
            variables: 
            {
            email: email,
            password: password
          },
            errorPolicy: "all"
          });
      
      if(response.data){
        const token = response.data.signin.accessToken; 
        const tokenType = response.data.signin.tokenType;
        localStorage.setItem("token", token);
        sessionStorage.setItem("tokenType", tokenType);

         
        const ACCESS_TOKEN = localStorage.getItem("token");
        const TOKEN_TYPE = sessionStorage.getItem("tokenType");

        if(ACCESS_TOKEN && TOKEN_TYPE){
          Swal.fire({
            title: "logged in sucessfully",
            timer: 2000,
            toast: true,
            position: "top",
            showConfirmButton: false,
            icon: "success"
         })
          props.history.push("/dashboard");
        } 

        }else{
          Swal.fire({
            title: "Alert:",
            html: "email and password is not authorized",
            timer: 2000,
            toast: true,
            position: "top",
            showConfirmButton: false,
            icon: "error"
         })
        }
       
    }catch(e){
      if(e){
        Swal.fire({
          title: "Network problem:",
          html: " connect to the internet",
          timer: 2000,
          toast: true,
          position: "top",
          showConfirmButton: false,
          icon: "info"
       })
      }
       
    }
  }



  return (
    <div className="c-app c-default-layout flex-row align-items-center text-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit = {handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" 
                      placeholder="Username" 
                      autoComplete="username" 
                      onChange = {handleChange} 
                      name="email"
                      value = {state.email || ""}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" 
                      placeholder="Password" 
                      autoComplete="current-password" 
                      onChange = {handleChange}
                      name="password"
                      value={state.password || ""} />
                    </CInputGroup>
                    <div>
                    <CButton color="primary" type="submit" className="px-4">Login</CButton>
                    </div>
                    <br/>
                    <Link to="/forgot">
                        <em>forgot password?</em>
                    </Link>
                  </CForm>
                </CCardBody>
              </CCard>
              
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}>
                <CCardBody className="text-center">
                    <h1 style={{marginTop:"80px"}}>STOCK TRACKER</h1>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login;
