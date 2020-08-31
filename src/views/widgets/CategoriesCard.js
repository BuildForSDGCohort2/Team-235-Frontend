import React from 'react'
import {
  CWidgetDropdown,
  CContainer,
  CModal,
  CModalHeader,
  CModalBody,
  CForm,
  CFormGroup,
  CButton,
  CInput,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const CategoriesCard = () => {
  //Manage state
  const [modal, setModal] = React.useState(false)
  const [name, setName] = React.useState('')

  //Allow input changes
  const handleChangeName = (e) =>
    setName(e.target.value);

  //toggle modal
  const toggle = () => {
    setModal(!modal)
  }
  // render
  return (

    < CContainer style = {{paddingTop: '2rem'}}>
    <CRow>
    <CCol sm = "6"lg = "3" >
    <CWidgetDropdown color = "gradient-primary" header = "Drugs" text = "Save Drugs"text = "Save Drugs"text = "Save Drugs">
    <CDropdown>
    <CDropdownToggle color = "transparent" >
    <CIcon name = "cil-settings"/>
    </CDropdownToggle> 
    <CDropdownMenu className = "pt-0"placement = "bottom-end" >
    <CDropdownItem onClick = {toggle}> Add Drugs </CDropdownItem>
    </CDropdownMenu> 
    </CDropdown>
    </CWidgetDropdown> 
    </CCol>

    <CModal show = {modal} onClose = {toggle}>
    <CModalHeader toggle = {toggle}> Add Drugs </CModalHeader> 
    <CModalBody>
    <CForm onSubmit = {console.log("Add")}>
    <CFormGroup>
    <CInput type = "text" name = "name" id = "item" placeholder = "Add Drugs" onChange = { handleChangeName }/> 
    <CButton color = "secondary" style = {{marginTop: '2rem'}} block> Add Drugs 
    </CButton> 
    </CFormGroup> 
    </CForm> 
    </CModalBody> 
    </CModal>

    <CCol sm = "6"lg = "3" >
    <CWidgetDropdown color = "gradient-info"
    header = "Bills"
    text = "5,000 cedis">
    <CDropdown >
    <CDropdownToggle color = "transparent" >
    <CIcon name = "cil-settings"/>
    </CDropdownToggle> 
    <CDropdownMenu className = "pt-0" placement = "bottom-end" >
    <CDropdownItem onClick = {toggle} > Add Bills </CDropdownItem>

    </CDropdownMenu> 
    </CDropdown> 
    </CWidgetDropdown> 
    </CCol> 
    <CModal show = { modal } onClose = {toggle} >
    <CModalHeader toggle = { toggle }> Add Bills </CModalHeader> 
    <CModalBody>
    <CForm onSubmit = {console.log("Add")} >
    <CFormGroup>
    <CInput type = "text"name = "name"id = "item"placeholder = "Add Drugs"onChange = {handleChangeName} /> 
    <CButton color = "secondary"style = {{marginTop: '2rem' }} block>Add Bills 
    </CButton> 
    </CFormGroup> 
    </CForm> 
    </CModalBody> 
    </CModal>

    <CCol sm = "6"lg = "3" >
    <CWidgetDropdown color = "gradient-warning" header = "Nurses" text = "Mrs. Betsy">
    <CDropdown>
    <CDropdownToggle color = "transparent" >
    <CIcon name = "cil-settings" />
    </CDropdownToggle> 
    <CDropdownMenu className = "pt-0" placement = "bottom-end" >
    <CDropdownItem onClick = {toggle}> Add Nurse </CDropdownItem>

    </CDropdownMenu> 
    </CDropdown> 
    </CWidgetDropdown> 
    </CCol> 
    <CModal show = {modal} onClose = {toggle}>
    <CModalHeader toggle = {toggle}> Add Nurse </CModalHeader> 
    <CModalBody>
    <CForm onSubmit = {console.log("Add")}>
    <CFormGroup>
    <CInput type = "text"name = "name" id = "item" placeholder = "Add Nurse"onChange = {handleChangeName }/> 
    <CButton color = "secondary" style = {{marginTop: '2rem'}} block >Add Nurse 
    </CButton> 
    </CFormGroup> 
    </CForm> 
    </CModalBody> 
    </CModal> 
    <CCol sm = "6" lg = "3" >
    <CWidgetDropdown color = "gradient-danger" header = "Doctor"text = "Mr. Kumasi">
    <CDropdown>
    <CDropdownToggle caret className = "text-white" color = "transparent" >
    <CIcon name = "cil-settings" />
    </CDropdownToggle> 
    <CDropdownMenu className = "pt-0" placement = "bottom-end" >
    <CDropdownItem onClick = {toggle} > Add Doctor </CDropdownItem>

    </CDropdownMenu> 
    </CDropdown> 
    </CWidgetDropdown> 
    </CCol>

    <CCol sm = "6"lg = "3">
    <CWidgetDropdown color = "gradient-danger" header = "Doctor" text = "Mr. Kumasi">
    <CDropdown>
    <CDropdownToggle caret className = "text-white" color = "transparent" >
    <CIcon name = "cil-settings" />
    </CDropdownToggle> 
    <CDropdownMenu className = "pt-0" placement = "bottom-end" >
    <CDropdownItem onClick = {toggle} > Add Doctor </CDropdownItem>

    </CDropdownMenu> 
    </CDropdown> 
    </CWidgetDropdown> 
    </CCol> 
    <CModal show = { modal} onClose = {toggle}>
    <CModalHeader toggle = {toggle}> Add Doctor </CModalHeader> 
    <CModalBody>
    <CForm onSubmit = {console.log("Add")}>
    <CFormGroup >
    <CInput type = "text"name = "name"id = "item"placeholder = "Add Doctor" onChange = {handleChangeName}/> 
    <CButton color = "secondary" style = {{marginTop: '2rem'}} block>Add Doctor 
    </CButton> 
    </CFormGroup> 
    </CForm> 
    </CModalBody> 
    </CModal> 
    </CRow> 
    </CContainer>

  )
}

export default CategoriesCard
