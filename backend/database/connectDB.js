import mongoose from "mongoose";


export const connectDB = ()=>{
    try {
        mongoose.connect(process.env.MONGODB_CONNECTION_URL)
        console.log(`db is connected!`)
    } catch (error) {
        console.log(`db is not connected and error: ${error}`)
    }
}