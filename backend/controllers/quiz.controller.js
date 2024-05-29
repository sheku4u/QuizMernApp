import { Quiz } from "../models/quiz.model.js";

export const createQuiz = async (req, res, next) => {
  try {
    const { questions, optionType, quizName,quizType } = req.body;
    if (!questions || !optionType || !quizName || !quizType) {
      return next(
        res.status(400).json({
          success: false,
          message: "please give the quesiton and their option-type correctly!",
          questions,
          optionType,
          quizName,
          quizType
        })
      );
    }
    if (questions.length > 5) {
      return next(
        res.status(400).json({
          success: false,
          message: "questions can't exceeds th limit of 5 ",
        })
      );
    }
    const createdBy = req.user._id;
    for (let question of questions) {
      if (question.options.length < 2 || question.options.length > 4) {
        return next(
          res.status(400).json({
            success: false,
            message:
              "each question should have minumum 2 and maximum 4 options",
          })
        );
      }
    }
    const quiz = await Quiz.create({
      questions,
      optionType,
      createdBy,
      quizName,
      quizType,
    });
    await quiz.save();
    return next(
      res.status(200).json({
        success: true,
        message: "quiz created successfully !",
        quiz,
      })
    );
  } catch (error) {
    return next(
      res.status(400).json({
        success: false,
        message: "error ",
        error,
      })
    );
  }
  // our way
  // try {
  //     const {questions,optionType} = req.body
  //     if(!questions || !optionType){
  //         return next(res.status(400).json({
  //             success:false,
  //             message:"please fill the question and option-tpye details correctly!"
  //         }))
  //     }
  //     if(questions.length>=4){
  //         return next(res.status(400).json({
  //             success:false,
  //             message:"You can add upto 5 questions only!"
  //         }))
  //     }
  //     for (const question of questions) {
  //         if(question.options.length<2 && question.options.length>4){
  //             return next(res.status(400).json({
  //                 success:false,
  //                 message:"minimum 2 options and maximum 4 options are allowed!"
  //             }))
  //         }
  //         const quiz =  new Quiz({questions,optionType})
  //         await quiz.save()
  //         return next(res.status(200).json({
  //                 success: true,
  //                 message:"quiz created successfully !",
  //                 quiz
  //             }))

  //     }

  // } catch (error) {
  //     return next(res.status(400).json({
  //                 success: false,
  //                 message:"error ",
  //                 error
  //             }))
  // }
};

// delete Quiz
export const deleterQuiz = async (req, res, next) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);
    if (!quiz) {
      return next(
        res.status(400).json({
          success: false,
          message: "quiz not found",
        })
      );
    }
    await quiz.deleteOne();
    return next(
      res.status(200).json({
        success: true,
        message: "quiz deleted Successfully!",
      })
    );
  } catch (error) {
    return next(
      res.status(400).json({
        success: false,
        message: "error in deleting Quiz Function",
        error: error,
      })
    );
  }
};

// get all Quizs
export const getAllQuiz = async (req, res, next) => {
  try {
    const allQuiz = await Quiz.find();
    if (!allQuiz) {
      return next(
        res.status(400).json({
          success: false,
          message: "error not getting all Quiz",
        })
      );
    }
    return next(
      res.status(200).json({
        success: true,
        message: "get all quiz Successfully!",
        allQuiz,
      })
    );
  } catch (error) {
    return next(
      res.status(400).json({
        success: false,
        message: "error in getAllQuiz Function",
        error,
      })
    );
  }
};
// get Single Quiz
export const getSingleQuiz = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleQuiz = await Quiz.findById(id);
    if (!singleQuiz) {
      return next(
        res.status(400).json({
          success: false,
          message: "error not getting single Quiz",
        })
      );
    }
    return next(
      res.status(200).json({
        success: true,
        message: "get quiz Successfully!",
        singleQuiz,
      })
    );
  } catch (error) {
    return next(
      res.status(400).json({
        success: false,
        message: "error in getSingleQuiz Function",
        error,
      })
    );
  }
};

// get current user quiz
export const getCurrentUserQuiz = async (req, res, next) => {
  try {
    const createdBy = req.user._id;
    const currentUserQuiz = await Quiz.find({ createdBy });
    if (!currentUserQuiz) {
      return next(
        res.status(400).json({
          success: false,
          message: "error in getting current user quiz",
        })
      );
    }
    return next(
      res.status(200).json({
        success: true,
        message: "getting current user quiz successfully",
        currentUserQuiz,
      })
    );
  } catch (error) {
    return next(
      res.status(400).json({
        success: false,
        message: "error in getCurrentUserQuiz Function",
        error,
      })
    );
  }
};

// update Quiz
export const updateQuiz = async (req, res, next) => {
    try {
        const {id} = req.params
        let quiz = await Quiz.findById(id)
        if(!quiz){
            return next(res.status(400).json({
                success:false,
                message:"quiz not found! 404"
            }))
        }
        if(!Array.isArray(req.body.questions)){
            return next(res.status(400).json({
                success:false,
                message:"Invalid questions data format please provide an array of questions"
            }))
        }
        const updateQuestions = req.body.questions.map((question) =>({
            questionText:question.questionText,
            options:{
                optionOne: question.options?.optionOne,
                optionTwo: question.options?.optionTwo,
                optionThree: question.options?.optionThree,
                optionFour: question.options?.optionFour,
                imageUrlOne: question.options?.imageUrlOne,
                imageUrlTwo: question.options?.imageUrlTwo,
                imageUrlThree: question.options?.imageUrlThree,
                imageUrlFour: question.options?.imageUrlFour,
                pollOptionOne:question.options?.pollOptionOne,
                pollOptionTwo:question.options?.pollOptionTwo,
                pollOptionThree:question.options?.pollOptionThree,
                pollOptionFour:question.options?.pollOptionFour,
            },
            correctOption: question.correctOption,
            questionImpression: question.questionImpression
        }))
        const newQuizData = {
            quizName : req.body.quizName,
            optionType: req.body.optionType,
            quizImpression: req.body.quizImpression,
            quizType:req.body.quizType,
            questions:updateQuestions
        }
       
        quiz = await Quiz.findByIdAndUpdate(id,newQuizData,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
        return next(res.status(200).json({
            success:true,
            message: "quiz update successfully!",
            quiz
        }))

    } catch (error) {
      return next(
        res.status(400).json({
          success: false,
          message: "error in updating Quiz Function",
          error,
        })
      );
    }
  };

// compare answers
