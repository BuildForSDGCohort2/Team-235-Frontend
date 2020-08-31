import React from 'react' 
import List from './list'
import { useState } from 'react';
 
import {CButton,CModal,CModalBody,CModalFooter, CCard, CCardBody, CCardHeader} from '@coreui/react'
 

 
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

        {/**start of card background */}
        <CCard style={{height:"80vh",borderRadius:"10px"}}>
           <CCardHeader>
               <CButton style={{float:"right"}} color="info" onClick={toggle} className="mr-1">ADD NEW USER</CButton>
           </CCardHeader>
           <CCardBody>
            <form onSubmit={handleSubmit}>
     
        <CModal show={modal} onClose={toggle}>
           <CModalBody className="text-center" style={{borderRadius:"15px", margin:"20px"}}>
           <div className="form-group">
                <label htmlFor="firstnameId"><em>First name</em></label>
                <input type="text" 
                className="form-control" 
                id="firstnameId" 
                value={state.firstName}
                name="firstName"
                onChange={handleChange}
                required/>
           </div>

           <div className="form-group">
                <label htmlFor="lastnameId"><em>last name</em></label>
                <input type="text" 
                className="form-control" 
                id="lastnameId" 
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                required/>
           </div>

           <div className="form-group">
                <label htmlFor="emailId"><em>email</em></label>
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
                <label htmlFor="phoneId"><em>phone</em></label>
                <input type="phone" 
                className="form-control" 
                id="phoneId"
                name="phone"
                value={state.phone}
                onChange={handleChange}/>
           </div>

           </CModalBody>

           <CModalFooter>
             <CButton  type="submit" color="info" style={{width:"150px"}}>SAVE</CButton>
             <CButton color="secondary" onClick={toggle} style={{width:"150px"}}>Cancel</CButton>
          </CModalFooter>
      </CModal>
      </form>
    </CCardBody>
    {/**end of card background */}
 </CCard>

</div>
        

      
    )
}

export default TheModal;