
import { ResultModel } from "../models/result.model.js"
// create result
export const createResult = async(req,res,next)=>{
    try {
        const {username,result,attempts,points} = req.body
        if(!username || !result || !attempts || !points){
            return next(res.status(400).json({
                success:false,
                message:"something is missing in username/result/attempts/points"
            }))
        }
        // if(!Array.isArray(result)){
        //     return next(res.status(400).json({
        //         success:false,
        //         message:"this is not correct format please provide the correct format array of result"
        //     }))
        // }
            const {id} = req.params
        const resultData = await ResultModel.create({
            username,result,attempts,points,resultFor:id
        })
        return next(res.status(200).json({
            success:true,
            message:"result create Successfully",
            resultData
        }))

    } catch (error) {
        return next(res.status(400).json({
            success:false,
            message:"error in createResult funciton",
            error
        }))
    }
}

// get all result
export const getAllResult = async(req,res,next)=>{
try {
    const allResult = await ResultModel.find()
    if(!allResult){
        return next(res.status(400).json({
            success:false,
            message:"Results not FOUND!,404"
        }))
    }
    return next(res.status(200).json({
        success:true,
        message:"get all results Successfully! ",
        allResult
    }))
} catch (error) {
    return next(res.status(400).json({
        success:false,
        message:"error in getAllResult function",
        error
    }))
}
}

// delete result 
export const deleteResult = async(req,res,next)=>{
try {
    const {id} = req.params
    const result = await ResultModel.findById(id)
    if(!result){
        return next(res.status(400).json({
            success:false,
            message:"result not FOUND!,404",
        }))
    }
    await result.deleteOne()
    return next(
        res.status(200).json({
          success: true,
          message: "Result deleted Successfully!",
        })
      )

} catch (error) {
    return next(res.status(400).json({
        success:false,
        message:"error in deleteResult function",
        error
    }))
}
}