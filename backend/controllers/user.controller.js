import { User } from "../models/user.model.js";
import ErrorHandler from "../middleware/error.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import mongoose from "mongoose";
import { sendToken } from "../utils/jwtToken.js";
import validator from "validator";

// register user
export const registerUser = catchAsyncError(async (req, res, next) => {
  const { username, email, password, confirmedPassword } = req.body;
  if (!username || !email || !password || !confirmedPassword) {
    return next(
      res.status(400).json({
        success: false,
        message: "please enter all the details carefully",
      })
    );
  } else if (!validator.isEmail(email) || email.trim() === "") {
    return next(
      res.status(400).json({
        success: false,
        message: "please enter Email address carefully",
      })
    );
  } else if (!validator.isStrongPassword(password) || password.trim() === "") {
    return next(
      res.status(400).json({
        success: false,
        message: "please enter password strong address carefully",
      })
    );
  } else if (username.trim() === "") {
    return next(
      res.status(400).json({
        success: false,
        message: "please enter username carefully",
      })
    );
  } else if (confirmedPassword.trim() === "") {
    return next(
      res.status(400).json({
        success: false,
        message: "dont enter confirmed password carefully",
      })
    );
  } else if (confirmedPassword !== password) {
    return next(
      res.status(400).json({
        success: false,
        message: "not confirmed try it again carefully!",
      })
    );
  } else if (await User.findOne({ email })) {
    return next(
      res.status(400).json({
        success: false,
        message: "User is already exists",
      })
    );
  } else {
    const userData = await User.create({
      username,
      email,
      password,
    });

    // res.status(200).json({
    //   success: true,
    //   message: "user is created successfully",
    // });
    sendToken(userData, 200, "User is Registered Successfully", res);
  }
});


// login user
export const loginUser = catchAsyncError(async(req,res,next)=>{
    const {email, password} = req.body
    if(!email || !password){
        return next(res.status(400).json({
            success:false,
            message:"enter all details carefully"
        }))
    }
    const userData = await User.findOne({email}).select("+password")
    if(!userData){
        return next(res.status(400).json({
            success:false,
            message:"Invalid email or password"
        }))
    }
    const isPasswordMatched = await userData.comparePassword(password)
    if(!isPasswordMatched){
        return next(res.status(400).json({
            success:false,
            message:"Wrong password"
        }))
    }
    sendToken(userData,200,"User is logged IN Successfully",res)
})



// logout User
export const logoutUser = (req,res,next)=>{
    res.status(200).cookie("token","",{
        expires: new Date(Date.now())
    }).json({
        success: true,
        message:"User logged Out Successfully!"
    })
}
//  getting user information
export const getCurrentUser = catchAsyncError((req,res,next)=>{
    const user = req.user
    res.status(200).json({
        success:true,
        user
    })
})































































































































// cathcAsyncError(async (req, res, next) => {
//   const { username, email, password, confirmedPassword } = req.body;
//   if (!username || !email || !password || !confirmedPassword) {
//     return next( new ErrorHandler("eneter proper",404)
//     );
//     //  res.status(400).json({message: "please fill the form and enter all the details carefully!",statusCode:400})
//   } else if (password !== confirmedPassword) {
//     return next(new ErrorHandler("check the password and fill it again ", 400));
//   } else if (!validator.isEmail(email)) {
//     return next(new ErrorHandler("enter a valid Email Address"));
//   } else {
//     let user = await User.findOne({ email });
//     if (user) {
//       return res
//         .status(400)
//         .json({ message: "user is already exists ", statusCode: 400 });
//     }
//     try {
//       user = await User.create({
//         username,
//         email,
//         password,
//       });
//       sendToken(user, 200, "User is Registered Successfully!", res);
//       return res.status(200).json({
//         success: true,
//         message: "user is created successfully",
//         user,
//       });
//     } catch (err) {
//       if (err.errors) {
//         // Mongoose validation errors
//         const validationErrors = {};
//         for (const field in err.errors) {
//           validationErrors[field] = err.errors[field].message;
//         }
//         return next(new ErrorHandler(validationErrors, 400))
//         //  res

//         //   .status(400)
//         //   .json({ message: "Validation error", errors: validationErrors });
//       } else if (err.code === 11000) {
//         // Handle duplicate username or email error
//         return res
//           .status(400)
//           .json({ message: "Username or email already exists" });
//       } else {
//         // Handle other errors (log for debugging)
//         console.error(err);
//         return res.status(500).json({ message: "Internal server error" }); // Generic error for unexpected errors
//       }
//     }
//   }
// });
