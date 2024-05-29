class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = statusCode;
    }
  }

export const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "internal error "
    err.statusCode = err.statusCode || 500
    if (err.name === "CastError") {
        const message = `Invalid: resource not found at ${err.path}`
        err = new ErrorHandler(message, 404)
    }
    return res.status(err.statusCode).json({
        success:false,
        message: err.message
    })
}


export default ErrorHandler