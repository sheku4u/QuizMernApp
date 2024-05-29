import React ,{useContext,useState}from "react";
import styles from "./register.module.css";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate,Navigate} from 'react-router-dom'

function Register() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmedPassword,setConfirmedPassword] = useState("")

    const {isAuthenticated} = useContext(AuthContext)
    const navigateTo = useNavigate()

    const handleRegister= async(e)=>{
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:8000/api/v1/user/register", {
              username,
              email,
              password,
              confirmedPassword,
            }, {
              withCredentials: true, // Send cookies across requests
              headers: {
                "Content-Type": "application/json",
              },
            });
          
            if (!response.data) {
              throw new Error("Registration failed. No data received.");
            }
          
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmedPassword("");
            toast.success(response.data.message);
            navigateTo('/login');
          } catch (error) {
            console.error(error); // Log the error for debugging
            toast.error(error.response?.data?.message || "Registration failed");
          }
        
        };
    

        if(isAuthenticated){
            return <Navigate to={'/home'} />
        }


    
    
  return (
    <div style={{ width: "80vw" }}>
      <div>
        <h1>QUIZZIE</h1>
        <div>
          <button >Sign Up</button>
          <button onClick={()=> navigateTo('/login')}>Log In</button>
        </div>
        <form onSubmit={handleRegister}>
          <label htmlFor="name">Name</label>

          <input type="text" id="name" placeholder="enter your name" 
          value={username} onChange={(e)=> setUsername(e.target.value)}
           />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="enter your email address"
          value={email} onChange={(e)=> setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="enter your password"
          value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="confirm your password" 
          value={confirmedPassword} onChange={(e)=> setConfirmedPassword(e.target.value)} />
          <button type="submit">Sign-Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
