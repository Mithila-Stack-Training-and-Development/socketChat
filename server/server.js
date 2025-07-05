import { server,app} from './socket/socket.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config()
import express from 'express';
import { connectDB } from './db/connection1DB.js';
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import messageRoute from './routes/messageRoute.js'
import { errorMiddleware } from './Middlewares/errorMiddleware.js';
import path from 'path';
connectDB();

const port=process.env.PORT;
const __dirname = path.resolve();
//middleware
app.use(cors(
    {
   origin: "https://socketchat-3qjd.onrender.com/",
   credentials:true
    }
))
app.use(express.json())
app.use(cookieParser())


//route call
app.use('/api/v1/user',userRoute);
app.use('/api/v1/message',messageRoute);
app.use(errorMiddleware)

app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('/*path', (_, res) => {
    res.sendFile(path.resolve(__dirname, "client","dist","index.html"));
})
//call listen
server.listen(port,()=>{
    console.log(`your server listening at port ${port}`);
})