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
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {    
    const router=useNavigate()
  
    const [data,setData]=useState({firstname:"",lastname:"",email:"",password:"",confirmPassword:""
    })
    console.log(data);
  
    
    function handleChange(e){
      setData({...data,[e.target.name]:e.target.value})
    }
    console.log(`${process.env.REACT_APP_SERVER_DOMAIN}`,"REACT_APP_SERVER_DOMAIN");
  console.log("11");
    async function handleSubmit(event){
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
  //  <div>
  //       <div>
  //           <h1>REgister Form </h1>
  //           <form onSubmit={handleSumbmit}>
  //               <label>FirstName:-</label><br/>
  //               <input type='text' onChange={handleChange} name='firstname' value={data.firstname}  /><br/>
  //               <label>LastName:-</label><br/>
  //               <input type='text' onChange={handleChange} name='lastname' value={data.lastname}  /><br/>
  //               <label>Email:-</label><br/>
  //               <input type='email'onChange={handleChange} name='email' value={data.email}  /><br/>
  //               <label>Password:-</label><br/>
  //               <input type='password' onChange={handleChange} name='password' value={data.password}  /><br/>
  //               <label>ConfirmPassword:-</label><br/>
  //               <input type='password' required onChange={handleChange} name='confirmPassword' value={data.confirmPassword} /><br/>
  //               <input type="submit" value="register"/>
  //           </form>
  //       </div>
      
  //   </div>






  <div className=" bg-slate-100 min-h-0 min-h-[650px] border-4   ">
  <div className="w-full mt-2 max-w-sm m-auto mb-10 drop-shadow-md shadow-md bg-white flex flex-col p-4">



   


    <form className="w-full" onSubmit={handleSubmit} >
      <label className="text-xl font-bold">First Name :</label>
      <input
        type="text" 
        id="firstname" 
        name="firstname" 
        onChange={handleChange}
        value={data.firstname}
        className="w-full bg-slate-200 px-2 py-2 font-bold  mb-4 focus-within:outline-blue-400 mt-2 rounded-full pl-5 "
        placeholder="Enter your first name"
      />

      <label className="text-xl font-bold">Last Name :</label>
      <input
        type="text" 
        id="lastname"
        name="lastname" 
        onChange={handleChange}
        value={data.lastname}
        className="w-full bg-slate-200 px-2 py-2 font-bold  mb-4 focus-within:outline-blue-400 mt-2 rounded-full pl-5 "
        placeholder="Enter your last name"
      />

      <label className="text-xl font-bold  mt-3">Email:</label>
      <input
        type="email" 
        id="email" 
        name="email" 
        onChange={handleChange}
        value={data.email}
        placeholder="Enter your enail"
        className="w-full bg-slate-200 px-2 py-2  font-bold  focus-within:outline-blue-400 mt-2 rounded-full pl-5 mb-4"
      />

      <label className="text-xl font-bold ">Password:</label>

      <div className="  bg-slate-200 flex h-10  px-2 focus-within:outline focus-within:outline-blue-400 rounded-full ites-center pl-5 px-2 py-2 mt-2 mb-4 ">
        <input 
        id="password"
         name="password"
          onChange={handleChange}
          value={data.password}
          
          className="w-full bg-slate-200  outline-none font-bold "
          placeholder="Password"
        />
        
      </div>

      <label className="text-xl font-bold ">ConfirmPassword:</label>

      <div className="  bg-slate-200 flex  px-2 h-10 focus-within:outline focus-within:outline-blue-400 rounded-full ites-center pl-5 px-2 py-2 mt-2 mb-4 ">
        <input 
        id="confirmPassword" 
        name="confirmPassword" 
        onChange={handleChange}
        value={data.confirmPassword}
          
          className="w-full bg-slate-200  outline-none font-bold "
          placeholder="ConfirmPassword"
        />
       
      </div>

      <button className="w-full bg-red-600 h-12  hover:bg-red-800 rounded-full mt-4 cursor-pointer text-xl text-white font-bold" >Sign Up</button>
    </form>


    <p className="mt-3  ">Already  have account ? <Link to={'/login'} className="text-red-900 font-bold underline ">Login</Link> </p>
  </div>
</div>

  )
  
  }

export default Register
