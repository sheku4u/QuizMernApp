import express from "express"
import { createResult, getAllResult,deleteResult } from "../controllers/result.controller.js"
const resultRouter = express.Router()


resultRouter.post('/addResult/:id',createResult)
resultRouter.delete('/delete/:id',deleteResult)
resultRouter.get('/getAll',getAllResult)












export default resultRouter