import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true

}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limits:"16kb"}))

app.use(express.static("public"))



export { app }