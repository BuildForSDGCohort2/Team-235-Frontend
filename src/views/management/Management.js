import React from 'react' 
import  useState  from 'react';
 
import {CButton,CModal,CModalBody,CModalFooter, CCard, CCardBody, CCardHeader} from '@coreui/react'
import List from './list';
 

 
const TheModal = () => {
    const [modal, setModal] = useState(false);
    const [state, setState] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        users:[
            //default users-----for testing purposes
            {
                firstName:"Amedzro Elikplim",
                lastName: "Emmanuel",
                email: "amedzroemmanuel@gmail.com",
                phone: "0545941195"
            }, 
            {
                firstName:"Betsy Nunu",
                lastName: "Ama",
                email: "betsynunu@gmail.com",
                phone: "0245645673"
            },
            {
                firstName:"Kwabena Beiko",
                lastName: "Throw away",
                email: "kwabenabeiko@gmail.com",
                phone: "0234545795"
            },
            {
                firstName:"David Ike",
                lastName: "Kwaku",
                email: "davidikekwaku@gmail.com",
                phone: "0234885595"
            }
             
        
        ]
    })

    const toggle = () =>{
        setModal(!modal);
    }

    function handleChange(e) {
       setState({...state, [e.target.name] : e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        let newUser = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            phone: state.phone,
        }
        setState({users:[...state.users, newUser]})
 
         /**extract data from state and send to backend*/
         //const {firstName, lastName, email, phone} = state;

        console.log(state)
      
        setModal(!modal);
          
    }

   
    return (
        <div className="container-fluid">

        {/**start of card background */}
        <CCard style={{borderRadius:"10px"}}>
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
                id ="firstnameId" 
                value={state.firstName || ''}
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
                value={state.lastName || ''}
                onChange={handleChange}
                required/>
           </div>

           <div className="form-group">
                <label htmlFor="emailId"><em>email</em></label>
                <input 
                type="email" 
                className="form-control" 
                id="emailId"
                value={state.email || ''}
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
                value={state.phone || ''}
                onChange={handleChange}/>
           </div>


           </CModalBody>


           <CModalFooter>
             <CButton  type="submit" color="info" style={{width:"150px"}}>SAVE</CButton>
             <CButton color="secondary" onClick={toggle} style={{width:"150px"}}>Cancel</CButton>
          </CModalFooter>
      </CModal>
      </form>

      <div>
          {state.users.map((user, index) => (
              <List key={index} firstName={user.firstName} lastName={user.lastName} email={user.email} phone={user.phone}/>
          ))}
      </div>
    </CCardBody>
    {/**end of card background */}
 </CCard>

</div>
)
}

export default TheModal;