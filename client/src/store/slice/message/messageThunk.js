import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../component/utilities/axiosInstance";

export const sendMessageThunk = createAsyncThunk(
  "message/send",
  async ({ receiverId,message }, { rejectWithValue }) => {
    try {
      // console.log("in send-message user thunk")
      const response = await axiosInstance.post(`/message/send/${receiverId}`, {
           message
      });
     
      // console.log("sendMessage:", response);
      return response.data;
    } catch (error) {
      // console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
    
      return rejectWithValue(errorOutput);
    }
  }
);
export const getMessageThunk = createAsyncThunk(
    "message/get-message",
    async ({otherParticipantId }, { rejectWithValue }) => {
      try {
        // console.log("in get-message user thunk")
        const response = await axiosInstance.get(`/message/get-message/${otherParticipantId}`);
       
        // console.log("getMessage:", response);
        return response.data;
      } catch (error) {
        // console.error(error);
        const errorOutput = error?.response?.data?.errMessage;
      
        return rejectWithValue(errorOutput);
      }
    }
  );
 