import dotenv from "dotenv";
dotenv.config();
import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {origin: "https://socketchat-3qjd.onrender.com/"},
  });
//fixed the CORS error by adding the origin as a string
  //userid <-> socketId (because each id is unique for a user)
  const userSocketmap={}
  io.on("connection", (socket) => {
    const userId=socket.handshake.query.userId;
  
    if(!userId){
        return;
    }
    userSocketmap[userId]=socket.id;

 
  
    io.emit("onlineUsers",Object.keys(userSocketmap))
    socket.on("disconnect", () => {
  
      delete userSocketmap[userId];
      io.emit("onlineUsers",Object.keys(userSocketmap))
    });
  });

  const getSocketId = (userId) =>{
    return userSocketmap[userId];
}

export { io, app, server, getSocketId };
