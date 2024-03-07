import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ urlencoded: true, limit: "16kb" }));
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import userRouter from './routes/user.routes.js'

app.use("/api/v1/users", userRouter)

export  {app}