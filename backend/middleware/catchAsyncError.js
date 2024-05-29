export const catchAsyncError = (theFunciton)=>{
    return(req,res,next)=>{
        Promise.resolve(theFunciton(req,res,next)).catch(next)
    }


}