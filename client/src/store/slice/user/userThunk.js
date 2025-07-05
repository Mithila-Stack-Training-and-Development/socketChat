import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../component/utilities/axiosInstance";
import toast from "react-hot-toast";
export const loginUserThunk = createAsyncThunk(
  "users/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // console.log("in login user thunk")
      const response = await axiosInstance.post("/user/login", {
        username,
        password,
      });
      toast.success("Login successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log("loginuserThunk:", response);
      return response.data;
    } catch (error) {
      // console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);
export const registerUserThunk = createAsyncThunk(
  "users/signup",
  async ({ fullName, username, password, gender }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/registration", {
        fullName,
        username,
        password,
        gender,
      });
      toast.success("Registrations successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      // console.log("registrationuserThunk:", response);
      return response.data;
    } catch (error) {
      // console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/logout");
      toast.success("logout successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
  
      // console.log("logout:", response);
      return response.data;
    } catch (error) {
      // console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);


export const getUserProfileThunk = createAsyncThunk(
   "user/getProfile",
   async (_, { rejectWithValue }) => {
     try {
      // console.log("in getUser Profile Thunk start calling ")
       const response = await axiosInstance.get("/user/get-profile");
      //  console.log("in getUser Profile Thunk:",response)
       return response.data;
     } catch (error) {
      //  console.error(error);
       const errorOutput = error?.response?.data?.errMessage;
       // toast.error(errorOutput);
       return rejectWithValue(errorOutput);
     }
   }
 );
 export const getOtherUsersThunk = createAsyncThunk(
  "user/getOtherUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/get-other-user");
      // console.log("int get ohter user",response)
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      // toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);
