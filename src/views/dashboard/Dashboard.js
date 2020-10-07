import React, { lazy, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CRow,
  CCol
} from "@coreui/react";
import {CChart} from "@coreui/react-chartjs";
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

const bar = {
  labels: ["Drugs", "Surgical tools", "Lab Equipment", "Hand Gloves", "Food", "Beds", "Books", "Nose mask", "Sanitizer"],
  datasets: [
    {
      label: "Overview of categories",
      backgroundColor: "#1b6be2",
      hoverBackgroundColor: "#6da5f9",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 65, 56, 55, 47, 70, 100],
      fill: false,
      pointHoverBackgroundColor: "#fff",
      pointHoverRadius: 5,
      borderJoinStyle: "miter",
      borderDash: [],
      pointRadius: 3
    },
  ],

};



const pie1 = {
  labels: [
    "Drugs",
    "Lab equipment",
    "Surgical tools",
  ],
  datasets: [
    {
      data: [300, 200, 100],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
      ],
    }],
  };

 

const Dashboard = (props) => {

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenType = sessionStorage.getItem("tokenType");
    if(!token || !tokenType){
       props.history.push("/404");
    }
 });

  return (
    <>
      <CCard>
        <CCardBody>
          <WidgetsDropdown />
        </CCardBody>
      </CCard>
      
      <CCard>
        <CCardBody>
          <div className="chart-wrapper">
            <CChart type="line" datasets={bar.datasets}   labels={bar.labels} style={{borderBlockStartWidth: "20px"}}/>
           </div>
          
        </CCardBody>
      </CCard>


      <CCard>
        <CCardBody>
          <CRow>
            <CCol>
            <div className="chart-wrapper">
              <CChart type="doughnut" datasets={pie1.datasets} labels={pie1.labels}/>
           </div>
            </CCol>
            <CCol>
            <div className="chart-wrapper">
              <CChart type="pie" datasets={pie1.datasets} labels={pie1.labels}/>
           </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>


      <CCard>
        <CCardBody>
            <div className="chart-wrapper">
              <CChart type="bar" datasets={bar.datasets}   labels={bar.labels} style={{borderBlockStartWidth: "20px"}}/>
            </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard;
