import React from 'react' 
import List from './list'
import { useState } from 'react';
 
import {CButton,CModal,CModalBody,CModalFooter} from '@coreui/react'
 

 
const TheModal = () => {
    const [modal, setModal] = useState(false);
    const [state, setState] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
    })

    const toggle = ()=>{
        setModal(!modal);
    }

    function handleChange(e) {
       setState({...state,[e.target.name] : e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
         console.log(state);
    }

   
    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
        <CButton style={{float:"right"}} color="info" onClick={toggle} className="mr-1">ADD NEW USER</CButton>
        <CModal show={modal} onClose={toggle}>

           <CModalBody>
            
           <div className="form-group">
                <label htmlFor="firstnameId">First name</label>
                <input type="text" 
                className="form-control" 
                id="firstnameId" 
                value={state.firstName}
                name="firstName"
                onChange={handleChange}
                required/>
           </div>

           <div className="form-group">
                <label htmlFor="lastnameId">Last name</label>
                <input type="text" 
                className="form-control" 
                id="lastnameId" 
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                required/>
           </div>

           <div className="form-group">
                <label htmlFor="emailId">Email</label>
                <input 
                type="email" 
                className="form-control" 
                id="emailId"
                value={state.email}
                required
                name="email"
                onChange={handleChange}/>
           </div>

           <div className="form-group">
                <label htmlFor="phoneId">Phone number</label>
                <input type="phone" 
                className="form-control" 
                id="phoneId"
                name="phone"
                value={state.phone}
                onChange={handleChange}/>
           </div>

           </CModalBody>

           <CModalFooter>
             <CButton type="submit" color="primary">SAVE</CButton>
             <CButton color="secondary" onClick={toggle}>Cancel</CButton>
          </CModalFooter>
      </CModal>
      </form>

      {/**display list of user */}
      <div className="container" style={{marginTop:"20px"}}>
         {/**<List /> */}
      </div>
 
      </div>
    )
}

export default TheModal;