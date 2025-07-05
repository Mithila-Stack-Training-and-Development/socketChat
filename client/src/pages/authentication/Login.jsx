import React, { useState,useEffect } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../store/slice/user/userThunk';
const Login = () => {
  //
  const { isAuthenticated} = useSelector(
    (state) => state.userReducer
  );
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [loginData,setloginData]=useState({
    username:"",
    password:""
  })
  const handlechange=(e)=>{
     setloginData({
      ...loginData,
      [e.target.name]:e.target.value
     })
    //  console.log(loginData)
  }
  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated]);


  const handleLogin=async()=>{
//  console.log("login")
//  console.log(loginData)
 const response=await dispatch(loginUserThunk(loginData));
 if(response?.payload?.success)
  {
    navigate("/")
  }
  // console.log(response)
  }
  return (
    <div className='w-full min-h-screen  flex justify-center items-center'>
         <div className='flex flex-col  gap-3.5 bg-base-200 p-6 border rounded-[5%]'>
            <h1 className="text-center text-2xl font-semibold">Login</h1>
<label className="input validator">
<FaUserAlt />
  <input
    type="text"
    required
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    name='username'
    onChange={handlechange}
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
  />
</label>

<label className="input validator">
<RiLockPasswordFill />
  <input
    type="password"
    required
    name='password'
    placeholder="Password"
    minlength="8"
    onChange={handlechange}
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<button className="btn btn-active btn-primary" onClick={handleLogin}>Login</button>
<p className='text-[13px]'>Don't have an acoount?   
      <Link to='/signup' className='text-blue-400 text-[15px] underline'>  SignUp</Link>
</p>

            </div>
    </div>
   
  )
}

export default Login