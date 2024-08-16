import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("Connected to db");
        
    } catch (error) {
        console.log("Not connected to database")
    }
}

export default connectDB