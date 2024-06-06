import React from 'react'
import S_Categories from '../Components/S_Categories'
import Header_parts from '../Components/Header_parts'
import Interior from '../Components/Interior'
import FreeShiping from '../Components/FreeShiping'
import NewArrivals from '../Components/NewArrivals'
import GardningTools from '../Components/GardningTools'



const AllCompo = () => {
  return (
    <div>
      <Header_parts /> 
      <S_Categories /> 
      <Interior />
      <FreeShiping />
      <GardningTools />
      <NewArrivals />
      
     
    </div>
  )
}
 
export default AllCompo
 