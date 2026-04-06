
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Make sure this name 'connectDB' is only used here
const connectDB = async () => {
    try {
        // Use the backticks `` for the string template
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            family: 4 
        });

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
        // Return the instance for your .then() in index.js
        return connectionInstance; 

    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB;