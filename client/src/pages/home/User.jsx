import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {setSelectedUser}  from '../../store/slice/user/userSlice.js';

const User = ({ userDetails }) => {

const dispatch=useDispatch();
const {selectedUser}=useSelector((state)=>state.userReducer);
const {onlineUsers}=useSelector((state)=>state.socketReducer);
const isonline=onlineUsers?.includes(userDetails?._id)
// console.log(selectedUser)


const handleUserClick = () => {
  dispatch(setSelectedUser(userDetails));
};
  return (
    <div className={`flex gap-6 p-5 items-center hover:bg-gray-700 ${userDetails?._id === selectedUser?._id && 'bg-gray-700'}`} onClick={handleUserClick}>
    
   <div className={`avatar avatar-${isonline && 'online'}`}>
  <div className="w-16 px-3 text-white rounded-full flex-row gap-2 items-center">
    <img src={userDetails?.avatar} />
  </div>
  </div>
  <div className='flex flex-col  '> 
  <h2 className='text-2xl'>{userDetails?.fullName}</h2>
  <p>{userDetails?.username}</p>
  </div>     
  
    </div>
   
  )  
}

export default User