import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {login} from './store/slice/user/userSlice';
import {Toaster} from 'react-hot-toast'
import { getUserProfileThunk } from './store/slice/user/userThunk';
const App = () => {
  const {isAuthenticated}=useSelector((state)=>state.userReducer);
  const dispatch=useDispatch();
  // console.log("app-isauthenticated",isAuthenticated)

  useEffect(() => {
    (async () => {
      const response=await dispatch(getUserProfileThunk());
    
      
      // console.log("app-respone:",response)
    })();
  }, []);
  return (
    <div>
    <Toaster 
  position="top-right"
  reverseOrder={false}
/>
      </div>
  )
}

export default App


