import { createSlice } from '@reduxjs/toolkit'

import { sendMessageThunk,getMessageThunk } from './messageThunk';


export const messageSlice=createSlice(
    {
        name:'message',
        initialState:{
            messages:null,
            buttonLoading:false
           
        },
        reducers:{ //synchronous functions only
          setNewMessage: (state, action) => {
            const oldMessages = state.messages ?? [];
            state.messages = [...oldMessages, action.payload];
          },
        },  

        extraReducers:(builder)=>{
          //send-message
          builder.addCase(sendMessageThunk.pending, (state, action) => {
            // console.log("pending-send-message")
            state.buttonLoading = true;

          });
          builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
            // console.log("fullfill-send-message")
            state.buttonLoading = false;
            state.messages=[...state.messages,action.payload?.responseData]
          });
          builder.addCase(sendMessageThunk.rejected, (state, action) => {
            // console.log("rejected-send-message")
            state.buttonLoading = false;
          });
          //get-message
          builder.addCase(getMessageThunk.pending, (state, action) => {
            // console.log("pending-get-message")
            state.buttonLoading = true;

          });
          builder.addCase(getMessageThunk.fulfilled, (state, action) => {
            // console.log("fullfill-get-message")
            
             state.messages=action.payload?.responseData?.message
            state.buttonLoading = false;
            // state.otherUsers = action.payload?.responseData;
          });
          builder.addCase(getMessageThunk.rejected, (state, action) => {
            // console.log("rejected-get-message")
            state.buttonLoading = false;
          });
         
         
        }
    }
)
// Action creators are generated for each case reducer function



// Action creators are generated for each case reducer function
export const {setNewMessage } = messageSlice.actions

export default messageSlice.reducer
