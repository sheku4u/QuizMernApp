import React,{useContext,useState} from 'react'
import styles from './navbar.module.css'
import { Link , useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'


function Navbar() {
  const [show,setShow] = useState(false)
  const [showPopup,setShowPopup] = useState(false)
  const handleNavbar = ()=>{
    setShow(!show)
  }
  const handleShowPopup = ()=>{
    setShowPopup(!showPopup)
  }
  const isRegister = useLocation("http://localhost:5173/")
  const isLogin = useLocation("http://localhost:5173/login")
  const {isAuthenticated, user,setIsAuthenticated} = useContext(AuthContext)
  const navigateTo = useNavigate()

  const handleLogout = async(ev)=>{
    ev.preventDefault()
    try {
      const response = await axios.get("http://localhost:8000/api/v1/user/logout",{withCredentials:true})
      setIsAuthenticated(false)
      toast.success(response.data.message)
      navigateTo('/')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <section className={
      isLogin.pathname === "/login" && isRegister.pathname === "/"? styles.hideNavbar: styles.showNavbar
    }>
<nav>
      <h1 className={styles.heading}>QUIZZIE</h1>
      <div className={styles.navBlock}>

<Link to={'/dashboard'} onClick={handleNavbar} >Dashboard</Link>
<Link to={'/analytics'} onClick={handleNavbar} >Analytics</Link>
<Link to={'/createQuiz'} onClick={handleNavbar } >Create Quiz</Link>
      </div>
      {/* conditional rendering for showing logout or not */}
        <span>
        
        <button onClick={handleLogout}>Logout</button>
        
      </span>
      
      
    </nav>
    </section>
    
  )
}

export default Navbar