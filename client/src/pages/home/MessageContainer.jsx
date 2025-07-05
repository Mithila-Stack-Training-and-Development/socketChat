import React, { useEffect } from 'react'
import User from './User.jsx'
import Message from './Message'

import { useDispatch, useSelector } from 'react-redux';
import { getMessageThunk } from '../../store/slice/message/messageThunk.js';
import SendMessage from './SendMessage.jsx';
const MessageContainer = () => {
  const {selectedUser}=useSelector((state)=>state.userReducer);
  const {messages}=useSelector((state)=>state.messageReducer);
  // console.log(messages)
  const dispatch=useDispatch();
  useEffect(()=>{
    if(selectedUser)
    {
      dispatch(getMessageThunk({otherParticipantId:selectedUser?._id}))
    }
    
  },[selectedUser])
  return (
    <>
      {!selectedUser? (
  <>please select a user</>
   ):(
    <div className=' h-screen w-full flex flex-col '>
    <div className='border-b border-b-white/10'>
       <User userDetails={selectedUser}/>
         </div>
         <div className='h-full overflow-y-auto p-3'>
          {
           messages?.map((message)=>{
          return  <Message key={message?._id} messageDetails={message} />
           })
          }
         </div>
         <SendMessage />
         </div>

   )}
    
    </>
 
  )
}

export default MessageContainer