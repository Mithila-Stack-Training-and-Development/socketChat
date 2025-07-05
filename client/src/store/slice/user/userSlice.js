import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk, logoutUserThunk, registerUserThunk,getUserProfileThunk, getOtherUsersThunk } from './userThunk.js';


export const userSlice=createSlice(
    {
        name:'user',
        initialState:{
            isAuthenticated:false,
            screenLoading:true,
            userProfile:null,
            buttonLoading:false,
            otherUsers :null,
            selectedUser: JSON.parse(localStorage.getItem("selectedUser")),
        },
        reducers:{ //synchronous functions only
        setSelectedUser:(state,action)=>{    
  
            localStorage.setItem("selectedUser", JSON.stringify(action?.payload));
          
          state.selectedUser=action.payload;
       
        },  
        },  

        extraReducers:(builder)=>{
          //get-other-user
          builder.addCase(getOtherUsersThunk.pending, (state, action) => {
            // console.log("pending-get-other-user")
            state.screenLoading = true;

          });
          builder.addCase(getOtherUsersThunk.fulfilled, (state, action) => {
            // console.log("fullfill-get-other-user")
            state.screenLoading = false;
            state.otherUsers = action.payload?.responseData;
          });
          builder.addCase(getOtherUsersThunk.rejected, (state, action) => {
            // console.log("rejected-get-other-user")
            state.screenLoading = false;
          });
          //get-profile
          builder.addCase(getUserProfileThunk.pending, (state, action) => {
          
            // console.log("pending-getProfile");
            state.screenLoading = true;
          });
          builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
            // console.log("fullfill-getProfile");
            state.isAuthenticated = true;
            state.screenLoading = false;
           
            state.userProfile = action.payload?.responseData;
            // console.log(state.userProfile);
          });
          builder.addCase(getUserProfileThunk.rejected, (state, action) => {
            // console.log("rejected-getProfile");
            state.screenLoading = false;
          });  
          //logout
          builder.addCase(logoutUserThunk.pending,(state,action)=>{
            // console.log("pending-logout");
            state.buttonLoading=true
          }),
          builder.addCase(logoutUserThunk.fulfilled,(state,action)=>{
            // console.log("fullfiled-logout");
           state.userProfile=null;
           state.buttonLoading=false
           state.isAuthenticated=false
           state.screenLoading=false;
           state.otherUsers=null,
           state.selectedUser=null,
           localStorage.clear();
          }),
          builder.addCase(logoutUserThunk.rejected,(state,action)=>{
            // console.log("rejected-logout");
            state.buttonLoading=false
          })
          //registration
          builder.addCase(registerUserThunk.pending,(state,action)=>{
            // console.log("pending-registraion");
            state.isAuthenticated=false;
            state.buttonLoading=true
          }),
          builder.addCase(registerUserThunk.fulfilled,(state,action)=>{
            // console.log("fullfiled-registration");
           state.userProfile=action.payload?.responseData?.user;
           state.buttonLoading=false;
           state.isAuthenticated=true
          }),
          builder.addCase(registerUserThunk.rejected,(state,action)=>{
            // console.log("rejected-registration");
            state.buttonLoading=false
          })
          //login user
          builder.addCase(loginUserThunk.pending,(state,action)=>{
            // console.log("pending-login");
            state.isAuthenticated=false;
            state.buttonLoading = true;
          }),
          builder.addCase(loginUserThunk.fulfilled,(state,action)=>{
            // console.log("fullfiled-login");
           state.userProfile=action.payload?.responseData?.user;
           state.buttonLoading=false
           state.isAuthenticated = true;
          }),
          builder.addCase(loginUserThunk.rejected,(state,action)=>{
            // console.log("rejected-login");
            state.buttonLoading=false
            state.isAuthenticated=false
          })
        }
    }
)
// Action creators are generated for each case reducer function



// Action creators are generated for each case reducer function
export const {setSelectedUser } = userSlice.actions

export default userSlice.reducer
