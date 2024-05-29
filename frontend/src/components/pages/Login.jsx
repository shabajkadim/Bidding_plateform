import axios from 'axios';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const router = useNavigate();
  
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    // console.log(loginData);
    
    const {LOGIN}=useContext(AuthContext)
    function handleChange(e) {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        if (loginData.email && loginData.password) {
          const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/login`, { loginData });
          // const response={data:{success:true , message:"login suucessfulr",token:"qhdfewghukb45",userData:{name:"shabaaj",email:"shabaaj@1234"}}}
              if(response.data.success===true){
                localStorage.setItem("token",JSON.stringify(response.data.token))
                LOGIN(response.data.user)
                toast(response.data.message)
                setLoginData({email:"" , password:""})
                router('/')
                
              }
        } else {
          toast("All fields are required");
        }
      } catch (error) {
        console.log(error);
        toast(error.response.data.error,"please check password or email")
        router('/register')
      }
    }
    
  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <label>userData</label><br/>
        <input type='email' onChange={handleChange} name='email' value={loginData.email}  /><br/>
        <label>password</label><br/>
        <input type='password'  onChange={handleChange} name='password' value={loginData.password}  /><br/>
        <input type='submit' value='submit' /> 
      </form>
    </div>
  )
}

export default Login
