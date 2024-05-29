import express from 'express'
import { createQuiz,deleterQuiz, getAllQuiz, getCurrentUserQuiz, getSingleQuiz, updateQuiz } from '../controllers/quiz.controller.js'
import { isUserLoggedIn } from '../middleware/auth.js'
const quizRouter = express.Router()

quizRouter.post('/createQuiz',isUserLoggedIn,createQuiz)
quizRouter.delete('/delete/:id',isUserLoggedIn,deleterQuiz)
quizRouter.get('/all',isUserLoggedIn,getAllQuiz)
quizRouter.get('/current',isUserLoggedIn,getCurrentUserQuiz)
quizRouter.get('/single/:id',isUserLoggedIn,getSingleQuiz)
quizRouter.put('/update/:id',isUserLoggedIn,updateQuiz)



export default quizRouter
