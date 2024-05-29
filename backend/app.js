import express from 'express'
import cors from 'cors'
import { connectDB } from './database/connectDB.js'
import userRouter from './routes/router.js'
import quizRouter from './routes/quizRouter.js'
import resultRouter from './routes/resultRouter.js'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
connectDB()
const app = express()

// for middlewares use 
app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))

// for routing 
app.use('/api/v1/user',userRouter)
app.use('/api/v1/quiz',quizRouter)
app.use('/api/v1/result',resultRouter)




export default app