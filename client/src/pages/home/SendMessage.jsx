import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageThunk } from '../../store/slice/message/messageThunk';
const SendMessage = () => {
    const dispatch=useDispatch();
    const [message,setmessage]=useState("");
    const {selectedUser}=useSelector((state)=>state.userReducer)
   const handleSend=(e)=>{
    e.preventDefault();
    dispatch(sendMessageThunk({
        receiverId:selectedUser?._id,
        message
    }))
   setmessage("")
   }
  
    const handleChangeInput=(e)=>{
    
        setmessage(e.target.value);
    }
  return (
   
        
            <form onSubmit={handleSend}>
                  <div className='w-full p-3 rounded-2xl flex'>
            <input type="text" placeholder="Type here" value={message} className="input w-full" onChange={handleChangeInput} />
            <button type='submit' className="btn join-item text-2xl " > <IoIosSend   /></button>
            </div>
            </form>
         
         
  
  )
}

export default SendMessage 