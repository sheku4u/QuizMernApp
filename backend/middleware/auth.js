import jwt from 'jsonwebtoken'
import { catchAsyncError } from './catchAsyncError.js'
import { User } from '../models/user.model.js'

// Authentication to see user is logged In or not
export const isUserLoggedIn = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies
    if(!token){
        return next(res.status(400).json({
            success: false,
            message: "User is not Authenticated!"
        }))
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded.id)
    next()
})
