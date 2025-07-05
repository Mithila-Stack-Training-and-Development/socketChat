import dotenv from "dotenv";
dotenv.config();
import { Server } from "socket.io";
import http from "http";
import express from "express";


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
    },
  });


  //userid <-> socketId (because each id is unique for a user)
  const userSocketmap={}
  io.on("connection", (socket) => {
    const userId=socket.handshake.query.userId;
    console.log("a user connected", userId);
    if(!userId){
        return;
    }
    userSocketmap[userId]=socket.id;
    console.log(userSocketmap);
 
    console.log(Object.keys(userSocketmap))//contain only value 
    io.emit("onlineUsers",Object.keys(userSocketmap))
    socket.on("disconnect", () => {
      console.log("user disconnected", userId);
      delete userSocketmap[userId];
      io.emit("onlineUsers",Object.keys(userSocketmap))
    });
  });

  const getSocketId = (userId) =>{
    return userSocketmap[userId];
}

export { io, app, server, getSocketId };
