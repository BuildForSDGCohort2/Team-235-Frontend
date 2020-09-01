import React from 'react'


const CategoriesCard = React.lazy(() => import('../widgets/CategoriesCard.js'))

export default class Categories extends React.Component {
  render() {
    return (
      <CategoriesCard />


    )
  }
}
