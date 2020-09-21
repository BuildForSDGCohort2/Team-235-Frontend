import React, {useState} from 'react'
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from "@coreui/react";
import Select from 'react-select'
import {Link} from 'react-router-dom'

const CreateNewRole = e => {

   const [state, setState] = useState({
       state :{
         
       
       }
   })

    const handleSubmit = e => {
        e.preventDefault()
    }


    const handleChange = e => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    const permissionList = [
        {label: "create user", value: "create user"},
        {label: "delete user", value: "delete user"},
        {label: "update user", value: "update user"},
        {label: "view", value: "view"}
    ]

    

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
                                name="firstName"
                                value={state.firstName || ""}
                                onChange={handleChange}
                                required
                                noValidate/>
                               
                          </div>

                          <div className="form-group">
                                <label htmlFor="descriptionId">DESCRIPTION</label>
                                <textarea style={{height: "115px"}} type="text" 
                                className="form-control" 
                                id ="descriptionId" 
                                name="itemname"
                                value={state.description}
                                onChange={handleChange}
                                noValidate/>
                               </div>
                           
                          <div className="form-group">
                                       <label htmlFor="categoriesId">PERMISSIONS</label>
                                       <Select type="text" 
                                       options = {permissionList}
                                       isMulti
                                    //    value={selectedOption}
                                    //    onChange = {handleOnSelectedOption}
                                       
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