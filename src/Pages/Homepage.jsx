import React from 'react'
import { Link } from 'react-router-dom'
const Homepage = () => {
  
  //-----handle function------------------------------------------------------------------------------------------------
  const HandleOnclick = () => {
    //------------------try it out if its works------------------------------------------------------------------------------
    //console.log('name') 
  } 

  return (
    <div>
      <h1>welcome fellows Cameroonian and Arsenal fc fans</h1>
      <div className='About'>
          <p>
            This simple website is for those who are either indomitable lions of Cameroon or gunners fans.
            As a big soccer fan, i would like by this page gathered both communities members. 
          </p>
      </div>
      <Link to='/Fanbase'>
        <button className='button' onClick={HandleOnclick}>
          Add Team
        </button>
      </Link>
      
    </div>
  )
}

export default Homepage