import React, {useEffect } from "react";


const CategoriesCard = React.lazy(() => import("../widgets/CategoriesCard.js"));

const Categories = (props) =>  {

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenType = sessionStorage.getItem("tokenType");
    if(!token || !tokenType){
       props.history.push("/404");
    }
 })

    return (
      <CategoriesCard/>
    )
}

export default Categories;

