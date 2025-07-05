import React, { useState,useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUserThunk } from "../../store/slice/user/userThunk";
import toast from "react-hot-toast";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { isAuthenticated} = useSelector(
    (state) => state.userReducer
  );
  const [signup, setsignup] = useState({
    fullName: "",
    username: "",
    password: "",
    repassword: "",
    gender:"male"
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated]);
  const handleinputchange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
    // console.log(signup);
  };
  const handleRegistration = async () => {
    if(signup.password !==signup.repassword)
    {
      return toast.error("password mismatch")
    }
    const response=await dispatch(registerUserThunk(signup));
    if(response?.payload?.success)
    {
      navigate("/")
    }
  };
  return (
    <div className="w-full min-h-screen  flex justify-center items-center">
      <div className="flex flex-col  gap-3.5 bg-base-200 px-9  py-6 border rounded-[5%]">
        <h1 className="text-center text-2xl font-semibold">SignUp</h1>
        <label className="input validator">
          <FaUserAlt />
          <input
            type="text"
            name="fullName"
            required
            placeholder="Full name"
            onChange={handleinputchange}
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            maxlength="30"
            title="Only letters, numbers or dash"
          />
        </label>
        <label className="input validator ">
          <FaUserAlt />
          <input
            type="text"
            name="username"
            required
            placeholder="Username"
            onChange={handleinputchange}
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            maxlength="30"
            title="Only letters, numbers or dash"
          />
        </label>
        <div className="input input-validator flex items-cente gap-2">
          <label htmlFor="male ">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              className="radio radio-primary"
              onChange={handleinputchange}
              defaultChecked
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="radio radio-primary"
              onChange={handleinputchange}
            />
            female
          </label>
        </div>

        <label className="input validator">
          <RiLockPasswordFill />
          <input
            type="password"
            name="password"
            required
            onChange={handleinputchange}
            placeholder="Password"
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        <label className="input validator">
          <RiLockPasswordFill />
          <input
            type="password"
            required
            name="repassword"
            placeholder="confirm Password"
            onChange={handleinputchange}
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        <button
          className="btn btn-active btn-primary"
          onClick={handleRegistration}
        >
          Signup
        </button>
        <p className="text-[13px]">
          {" "}
          Have an acoount?
          <Link to="/login" className="text-blue-400 text-[15px] underline">
            {" "}
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
