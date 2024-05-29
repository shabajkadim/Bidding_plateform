// import React from 'react'

// const Register = () => {
//   return (
//     <div>
//       Re
//     </div>
//   )
// }

// export default Register




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {
    // const[userData, setUserData]=useState({firstname:"", lastname:"",email:"",password:"",confirmPassword:""})
    // const router=useNavigate()

    // async function handleSumbmit(e){
    //     e.preventDefault()
    //     if(userData.firstname &&userData.lastname && userData.email && userData.password && userData.confirmPassword){
    //         if(userData.password === userData.confirmPassword){
    //             try{
    //                 const response=await axios.post('http:localhost:8000/api/v1/auth/register',{userData})
    //                 if(response.data.success===true)
    //                 alert(response.data.success)
    //                 setUserData({firstname:"",lastname:"",email:"",password:"",confirmPassword:""})
                    
    //                 router('/register')


    //             }catch(error){
    //                 alert(error.response.data.message)
    //             }
    //         }else{
    //             alert("password confirm password not match")
    //         }
    //     }else{
    //         alert("All feild are required")
    //     }
    // }

    // function handleChange(e){
    //     setUserData({...userData,[e.target.name]:e.target.value})
    // }


    
    const router=useNavigate()
  
    const [data,setData]=useState({firstname:"",lastname:"",email:"",password:"",confirmPassword:""
    })
    console.log(data);
  
    
  
    
  
  
    function handleChange(e){
      setData({...data,[e.target.name]:e.target.value})
    }
    console.log(`${process.env.REACT_APP_SERVER_DOMAIN}`,"REACT_APP_SERVER_DOMAIN");
  console.log("11");
    async function handleSumbmit(event){
      event.preventDefault()
      try{
        if(data.firstname && data.lastname && data.email && data.password && data.confirmPassword ){
          if(data.password === data.confirmPassword){
            console.log("12");
              const response =await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/register`,{data})
            // const response={data:{success:true , message:"Sign up Successfull" , token:"kjsahgdfkjj"}}
            if(response.data.success === true){
            toast(response.data.message)
            setData({firstname:"", lastname:"",email:"", password:"",confirmPassword:""})
            localStorage.setItem("my-tokendata",JSON.stringify(response.data.token));
            router('/login')
            }
          }else{
            toast("Password and cofirmpassword not same")
          }
          console.log("13");
  
        }else{
          toast("All fields are require")
        }
        
      }catch(error){
        console.log(error);
      }
    }
  
  return (
   <div>
        <div>
            <h1>REgister Form </h1>
            <form onSubmit={handleSumbmit}>
                <label>FirstName:-</label><br/>
                <input type='text' onChange={handleChange} name='firstname' value={data.firstname}  /><br/>
                <label>LastName:-</label><br/>
                <input type='text' onChange={handleChange} name='lastname' value={data.lastname}  /><br/>
                <label>Email:-</label><br/>
                <input type='email'onChange={handleChange} name='email' value={data.email}  /><br/>
                <label>Password:-</label><br/>
                <input type='password' onChange={handleChange} name='password' value={data.password}  /><br/>
                <label>ConfirmPassword:-</label><br/>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={data.confirmPassword} /><br/>
                <input type="submit" value="register"/>
            </form>
        </div>
      
    </div>
  )
  
  }

export default Register
