import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {    
  const router = useNavigate();
  const [data, setData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (data.firstname && data.lastname && data.email && data.password && data.confirmPassword) {
        if (data.password === data.confirmPassword) {
          const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/register`, { data });
          if (response.data.success === true) {
            toast(response.data.message);
            setData({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });
            localStorage.setItem("my-tokendata", JSON.stringify(response.data.token));
            router('/login');
          }
        } else {
          toast("Password and confirm password do not match");
        }
      } else {
        toast("All fields are required");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-black mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-black font-semibold mb-2">First Name:</label>
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-pink-100 transition-colors"
            placeholder="Enter your first name"
          />

          <label className="block text-black font-semibold mb-2">Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-pink-100 transition-colors"
            placeholder="Enter your last name"
          />

          <label className="block text-black font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-pink-100 transition-colors"
            placeholder="Enter your email"
          />

          <label className="block text-black font-semibold mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-pink-100 transition-colors"
            placeholder="Enter your password"
          />

          <label className="block text-black font-semibold mb-2">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-pink-100 transition-colors"
            placeholder="Confirm your password"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-black">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
