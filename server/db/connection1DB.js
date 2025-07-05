import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
    const MongoDB_URL=process.env.MongoDB_URL;
    const instance= await mongoose.connect(MongoDB_URL);
    console.log(`MongoDB connected:${instance.connection.host}`)
    }
    catch(error)
    {
        console.log(error)
    }
}