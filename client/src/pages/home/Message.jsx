import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
const Message = ({messageDetails}) => {
  const {userProfile,selectedUser}=useSelector((state)=>state.userReducer)
  const messageRef=useRef(null);
  
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []); 
  const updatedAt = new Date(messageDetails.createdAt);

const formattedTime = updatedAt.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});  
  return (

    < >
      
        <div ref={messageRef} className={`chat ${userProfile?._id === messageDetails?.senderId ? 'chat-end': 'chat-start'}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={userProfile?._id === messageDetails?.senderId ? userProfile?.avatar: selectedUser?.avatar}
      />
    </div>
  </div>
  <div className="chat-header">
  
    <time className="text-xs opacity-50">{formattedTime}</time>
  </div>
  <div className="chat-bubble">{messageDetails?.message}</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>

    </>   
  )
}

export default Message