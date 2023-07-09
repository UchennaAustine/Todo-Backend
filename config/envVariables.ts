import dotenv from "dotenv"
dotenv.config()

export const envVariables = {
    port: process.env.port!,
    MONGODB_STRING: process.env.MONGODB_STRING!
}