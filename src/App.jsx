import Header from './Components/Header'
//---------import {Route , Routes} To wrap our differents routes------------------------------------------
import {Route , Routes} from "react-router-dom"
//---------------------------importing my routes inside my main app---------------------------------------
import Homepage from './Pages/Homepage'
import Fanbase from './Pages/Fanbase'

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/fanbase' element={<Fanbase/>}/>   
      </Routes>
      
    </>
  )
}

export default App
