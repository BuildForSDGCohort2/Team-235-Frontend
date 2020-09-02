import React from 'react' 
import  {useState}  from 'react';
 
import {CButton,CModal,CModalBody,CModalFooter, CCard, CCardBody, CCardHeader,CDataTable,CBadge,CCollapse} from '@coreui/react'
// import {CButton,CModal,CModalBody,CModalFooter, CCard, CCardBody, CCardHeader} from '@coreui/react'
import List from './list';
 

 
const TheModal = () => {
    const [modal, setModal] = useState(false);
    const [state, setState] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        users:[
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
            },
            {
                firstName:"Emmanuel Botwe",
                lastName: "kofi",
                email: "emmanuelbotwe@gmail.com",
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
    const usersData = [
        {id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
        {id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
        {id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
        {id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending'},
        {id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active'},
        {id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
        {id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
        {id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending'},
        {id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active'},
        {id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
        {id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
        {id: 14, name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Pending'},
        {id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active'},
        {id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
        {id: 18, name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
        {id: 19, name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Pending'},
        {id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active'},
        {id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
        {id: 23, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending'},
        {id: 42, name: 'Ford Prefect', registered: '2001/05/25', role: 'Alien', status: 'Don\'t panic!'}
      ]
    
      const [details, setDetails] = useState([])
    //   const [items, setItems] = useState(usersData)
    
      const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
          newDetails.splice(position, 1)
        } else {
          newDetails = [...details, index]
        }
        setDetails(newDetails)
      }
    
    
      const fields = [
        { key: 'name', _style: { width: '40%'} },
        'registered',
        { key: 'role', _style: { width: '20%'} },
        { key: 'status', _style: { width: '20%'} },
        {
          key: 'show_details',
          label: '',
          _style: { width: '1%' },
          sorter: false,
          filter: false
        }
      ]
    
      const getBadge = (status)=>{
        switch (status) {
          case 'Active': return 'success'
          case 'Inactive': return 'secondary'
          case 'Pending': return 'warning'
          case 'Banned': return 'danger'
          default: return 'primary'
        }
      }
   
    return (
        <div className="container-fluid">

        {/**start of card background */}
        <CCard style={{borderRadius:"10px"}}>
           <CCardHeader>
               <CButton style={{float:"right"}} color="info" onClick={toggle} className="mr-1">ADD NEW USER</CButton>
           </CCardHeader>
           {/* <CCardBody> */}
           <CDataTable
                    items={usersData}
                    fields={fields}
                    columnFilter
                    tableFilter
                   itemsPerPageSelect
                    itemsPerPage={10}
                    hover
                    sorter
                    pagination
                    scopedSlots = {{
                    'status':
                    (item)=>(
                        <td>
                        <CBadge color={getBadge(item.status)}>
                            {item.status}
                        </CBadge>
                        </td>
                    ),
                        'show_details':
                        (item, index)=>{
                            return (
                            <td className="py-2">
                                <CButton
                                color="primary"
                                variant="outline"
                                shape="square"
                                size="sm"
                                onClick={()=>{toggleDetails(index)}}
                                >
                  {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
              )
              },
                'details':
                    (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>
                    {item.username}
                  </h4>
                  <p className="text-muted">User since: {item.registered}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          }
      }}
    />
     </CCard>
  {/* ) */}
            {/* <form onSubmit={handleSubmit}>
     
            <CModal show={modal} onClose={toggle}>
           <CCardBody> */}

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
    {/* </CCardBody> */}

      <div>
          {state.users.map((user, index) => (
              <List key={index} firstName={user.firstName} lastName={user.lastName} email={user.email} phone={user.phone}/>
          ))}
      </div>
    {/* </CCardBody> */}
    {/**end of card background */}


// </div>
        
    
      
//     )
)
}

export default TheModal;