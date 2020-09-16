import React, {useState} from "react";
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardFooter, CCardBody,CButton } from "@coreui/react";
import {Link} from "react-router-dom";
import Select from "react-select";

const options = [
    {value:"Drug", label:"Drugs"},
    {value: "Non-Drugs", label: "Non-Drugs"},
    {value: "Laboratory equipment", label: "Laboratory Equipment"}
];

const facetList = [
    {value: "Electronics", label: "Electronics"},
    {value: "Ernest Pharmaceuticals", label: "Ernest Pharmaceuticals"},
    {value: "syrup", label: "Syrup"},
    {value: "tablet", label: "Tablet"}
];

const UserList = [
    {value: "Admin", label: "Admin"},
    {value: "Amedzro Elikplim", label: "Amedzro Elikplim"},
    {value: "Betsy Nunu", label: "Betsy Nunu"}
];


const AddStock = () => {

    const [state, setState] = useState({
        itemName: "",
        facet: "",
        dateAdded: "",
        itemType: "",
        dateManufactured: "",
        expiryDate: "",
        department: "",
        itemCode: "",
        link: "",
        //addedBy: "",
        totalNumber: "",
        description: ""
    });

    //TODO: create hooks for selectOptions and setSelectOptions
    const [selectedOption, setSelectedOption] = useState(null);

    //TODO: refactor this code
    const handleSelectedOption = (e) => {
        setSelectedOption(e);
    };
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
    };



    const handleSubmit = (e) => {
        e.preventDefault();
    };
   
    return(
        <CContainer>
        <CRow>
           <CCol>
           <form onSubmit={handleSubmit}>
                 <CCard style={{marginTop:"-20px", marginLeft:"auto", marginRight:"auto", borderRadius:"10px"}}>
                     <CCardHeader className="text-center"><h4>ADD NEW STOCK</h4></CCardHeader>
                     
                     <CCardBody>
                         <CRow>
                             <CCol>
                             <div className="form-group">
                                <label htmlFor="itemnameId">ITEM NAME</label>
                                <input type="text" 
                                className="form-control" 
                                id ="itemnameId" 
                                name="itemname"
                                value={state.itemName}
                                onChange={handleChange}
                                noValidate/>
                             </div>

                             
                               <CRow>
                                   <CCol>
                                    <div className="form-group">
                                        <label htmlFor="categoriesId">SELECT CATEGORIES</label>
                                        <Select type="text" 
                                        options = {options}
                                        value={selectedOption}
                                        onChange={handleSelectedOption}
                                       />
                                    </div>
                                  </CCol>
                                  
                                   <CCol>
                                    <div className="form-group">
                                        <label htmlFor="facetId">ADD FACET</label>
                                        <Select isMulti type="text" 
                                        options = {facetList}
                                        noValidate
                                       />
                                    </div>
                                  </CCol>
                               </CRow>
                              
                               <div className="form-group">
                                <label htmlFor="dateAddedId">DATE ADDED</label>
                                <input type="text" 
                                className="form-control" 
                                id ="dateAddedId" 
                                name="dateAdded"
                                value={state.dateAdded}
                                onChange={handleChange}
                                noValidate/>
                               </div>

                               <div className="form-group">
                                <label htmlFor="itemtypeId">ITEM TYPE</label>
                                <input type="text" 
                                className="form-control" 
                                id ="itemTypeId" 
                                name="itemType"
                                value={state.itemType}
                                onChange={handleChange}
                                noValidate/>
                               </div>

                               <div className="form-group">
                                <label htmlFor="dateManufacturedId">DATE MANUFACTURED (if applicable)</label>
                                <input type="date" 
                                className="form-control" 
                                id ="dateManufacturedId" 
                                name="dateManufactured"
                                value={state.dateManufactured}
                                onChange={handleChange}
                                noValidate/>
                               </div>

                               <div className="form-group">
                                <label htmlFor="expiryDateId">EXPIRY DATE (if applicable)</label>
                                <input type="date" 
                                className="form-control" 
                                id ="expiryDateId" 
                                name="expiryDate"
                                value={state.expiryDate}
                                onChange={handleChange}
                                noValidate/>
                               </div>

                             </CCol>
                            

                              {/**second column */}
                             <CCol>

                             <div className="form-group">
                                <label htmlFor="departmentId">DEPARTMENT ACQUIRED FOR</label>
                                <input type="text" 
                                className="form-control" 
                                id ="departmentId" 
                                name="department"
                                value={state.department}
                                onChange={handleChange}
                                noValidate/>
                             </div>
                              
                               <div className="form-group">
                                <label htmlFor="itemCodeId">ITEM CODE</label>
                                <input type="text" 
                                className="form-control" 
                                id ="itemCodeId" 
                                name="itemCode"
                                value={state.itemCode}
                                onChange={handleChange}
                                noValidate/>
                               </div>

                            

                               <div className="form-group">
                                <label htmlFor="linkId">USAGE GUIDE LINK</label>
                                <input type="text" 
                                className="form-control" 
                                id ="linkId" 
                                name="link"
                                value={state.link}
                                onChange={handleChange}
                                noValidate/>
                               </div>

                               <CRow>
                                   <CCol>
                                    <div className="form-group">
                                        <label htmlFor="addedById">ADDED BY</label>
                                        <Select type="text" 
                                        options = {UserList}
                                        noValidate/>
                                    </div>
                                  </CCol>
                                   <CCol>
                                    <div className="form-group">
                                        <label htmlFor="totalNumberId">TOTAL NUMBER</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id ="totalNumberId" 
                                        name="facet"
                                        value={state.totalNumber}
                                        onChange={handleChange}
                                        noValidate/>
                                    </div>
                                  </CCol>
                               </CRow>
 
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
                               
                             </CCol>
                         </CRow>
                       
                         
                           
                     </CCardBody>
                     <CCardFooter className="text-center">
                     <CButton  type="submit" color="info" style={{width:"150px", margin:"10px"}}>SAVE</CButton>
                     <Link to='./stock-details'>
                     <CButton color="secondary" style={{width:"150px"}}>CANCEL</CButton>
                     </Link>
                     </CCardFooter>
                    
                 </CCard>
            </form>
           </CCol>
        </CRow>
     </CContainer>
    );
};

export default AddStock;
