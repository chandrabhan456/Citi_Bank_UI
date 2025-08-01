import React,{useState} from 'react';

import {Navigate, useNavigate} from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons
import "./Login.css";
const Login = () => {
    const { login1, setlogin1,setMainPage,selectedRole,setSelectedRole } = useStateContext();
	 const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

	const [input, setInput] = React.useState({ email: '', password: '' });
 const [category, setCategory] = React.useState("");

   const navigate = useNavigate();
	const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
		
	};
  console.log("vidhi",login1)
	
	const formSubmitter=(e) =>{
		
		e.preventDefault();
  
		
		
	
		if(input.email !== 'admin' || input.password !== 'admin') return seterrorMessage('Invalid email or password');

		localStorage.setItem('login','true');
        setMainPage(true)
        setlogin1(true)
       setSelectedRole(category)
        console.log("logged in")
	
       
	};
	
		
	return (
		
<div className="login">
  <div className='flex gap-20'>
   <div className="citi-header fade-in">
    {/* <div className="citi-logo">🏦 CITI BANK</div> */}
    <div className="citi-subtitle mt-20">Advanced Employee Credit Card Recommendation Dashboard</div>
    <p >Empowering intelligent customer relationships through AI-driven insights</p>
</div>
	 <div className="login-form">
 <form onSubmit={formSubmitter}>
  {/* Select Category Dropdown */}
  <div className="input-group">
    <label htmlFor="category" className="input-label">Select Role</label>
    <select
      id="category"
      name="category"
      value={category}
      onChange={e => setCategory(e.target.value)}
      className="text-input1"
      required
    >
   <option value="" disabled hidden>
    Select Role
  </option>
      <option value="employee">Employee</option>
      <option value="customer">Customer</option>
    </select>
  </div>

  <div className="input-group">
    <label htmlFor="username" className="input-label">Username</label>
    <input
      type="text"
      id="username"
      name="email"
      placeholder="Enter your username"
      onChange={handleChange}
      className="text-input1"
      autoComplete='current-password'
    />
  </div>
  
  <div className="input-group mt-2" style={{ position: 'relative' }}>
    <label htmlFor="password" className="input-label">Password</label>
    <input
      type={passwordVisible ? 'text' : 'password'}
      id="password"
      name="password"
      placeholder="Enter your password"
      onChange={handleChange}
      className="text-input1"
      autoComplete='current-password'
      style={{ paddingRight: '30px' }}
    />
    <span
      onClick={togglePasswordVisibility}
      className="absolute right-2 top-10 cursor-pointer text-xl text-blue-500"
    >
      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>
  
  <div className="forgot-password">
    <a href="#">Forgot Password?</a>
  </div>
  <button className="btn">Login</button>
</form>

</div>
</div>
  </div>
)
};

export default Login;