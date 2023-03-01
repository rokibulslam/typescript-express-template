import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config({ path: "../../config.env" });

async function connect() {
    const dbUri = 'mongodb://127.0.0.1:27017'
   
   try {
       await mongoose.connect(dbUri)
       console.log("DB connected")
   } catch (error) {
       console.log("Not Connected to DB");    
       process.exit(1)
   }
}
export default connect