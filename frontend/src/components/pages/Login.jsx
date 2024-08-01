import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const router = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { LOGIN } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (loginData.email && loginData.password) {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/login`, { loginData });
        if (response.data.success === true) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("user", JSON.stringify(response.data.user));  // Save user data to localStorage
          LOGIN(response.data.user);
          toast(response.data.message);
          setLoginData({ email: "", password: "" });
          router('/');
        }
      } else {
        toast("All fields are required");
      }
    } catch (error) {
      console.log(error);
      toast(error.response.data.error, "please check password or email");
      router('/register');
    }
  };

  return (
    <div className="bg-slate-100 min-h-0 min-h-[650px] border-4">
      <div className="w-full mt-2 max-w-sm m-auto mb-10 drop-shadow-md shadow-md bg-white flex flex-col p-4">
        <h1 className="text-center text-3xl font-bold pt-5">Login Page</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <label className="text-xl font-bold mt-3">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={loginData.email}
            placeholder="Enter your email"
            className="w-full bg-slate-200 px-2 py-2 font-bold focus-within:outline-blue-400 mt-2 rounded-full pl-5 mb-4"
          />
          <label className="text-xl font-bold">Password:</label>
          <div className="bg-slate-200 flex h-10 px-2 focus-within:outline focus-within:outline-blue-400 rounded-full items-center pl-5 px-2 py-2 mt-2 mb-4">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={loginData.password}
              className="w-full bg-slate-200 outline-none font-bold"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-red-600 h-12 hover:bg-red-800 rounded-full mt-4 cursor-pointer text-xl text-white font-bold">
            Login
          </button>
        </form>
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-red-900 font-bold underline">
            Sign-up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
