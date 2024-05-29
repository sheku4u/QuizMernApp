import { useContext, useEffect,useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import axios from 'axios'
import { AuthContext } from './context/AuthContext'
import {Toaster} from 'react-hot-toast'
import {Home, Analytics, CreateQuiz, Dashboard,Login,Register,CreatingQuizForm} from './pages'
import { Navbar, Quiz } from './components'
function App() {
  const { setUser,user,isAuthenticated,setIsAuthenticated,setQuiz} = useContext(AuthContext)

  
//  routing the pages over here 
useEffect(()=>{
  const fetchUser = async()=>{
    try {
      const response = await axios.get("http://localhost:8000/api/v1/user/getProfile",{withCredentials:true})
      setUser(response.data.user)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error)
      setIsAuthenticated(false)
      setUser({})
      
    }
    
  }

  fetchUser()

},[isAuthenticated])


  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/analytics' element={<Analytics />}/>
        <Route path='/createQuiz' element={<CreateQuiz  />}/>
        <Route path='/create' element={<CreatingQuizForm  />}/>
        {/* <Route path='/createQuiz' element={<CreateQuiz showPopup={showPopup} setShowPopup={()=>setShowPopup(true)} onCloseFunction={onCloseFunction} />}/> */}
        <Route path='/quiz' element={<Quiz />}/>
      </Routes>
<Toaster />
    </Router>
  )
}

export default App
