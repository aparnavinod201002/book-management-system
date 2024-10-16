
import React from 'react'
import AddBooks from '../components/AddBooks'

import ViewCard from '../Components/ViewCard'


function LandingPage() {
  return (
    <>
    <div className="d-flex justify-content-center m-5 p-5">
   
    <AddBooks/>

    </div>
    <div className='d-flex justify-items-center m-5 border border-2 m-3 bg-primary'>
    <ViewCard/>
    </div>
   
     
   
    </>
    
   
  )
}

export default LandingPage
