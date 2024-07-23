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
      <h1>welcome to your daily news</h1>
      <div className='About'>
          <p>
            <i>this simple web app help display some current news related to the techcrunch company.
              In order to know more about just click on the start button and you will get to our main page.
              Enjoy your lecture and do not forget to take note as it is always important to come out with a clear
              overview of the topic.
            </i>
          </p>
      </div>
      <Link to='/Fanbase'>
        <button className='button' onClick={HandleOnclick}>
          Welcome
        </button>
      </Link>
      
    </div>
  )
}

export default Homepage