import mongoose from "mongoose";
import dotenv from "dotenv";
import { envVariables } from "./envVariables";
dotenv.config();

const mongooseString: string = envVariables.MONGODB_STRING!;

export const dbConnect = () => {
    mongoose.connect(mongooseString).then(()=>{
        console.log("Connection has being established");
    })
}