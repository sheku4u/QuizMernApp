import mongoose, {Schema, model} from 'mongoose'

// const optionSchema = new Schema({
//     text:{
//         type:String,
//         // required:true
//     },
//     isCorrect:{
//         type:Boolean,
//         // required:true
//     }
// })
const optionSchema = new Schema({
    optionOne: {
      type: String,

    },
    optionTwo: {
      type: String,
      
    },
    optionThree: {
      type: String,
    },
    optionFour: {
      type: String,
    },
    imageUrlOne: {
      type: String,
    },
    imageUrlTwo: {
      type: String,
    },
    imageUrlThree: {
      type: String,
    },
    imageUrlFour: {
      type: String,
    },
    pollOptionOne:{
      type:String
    },
    pollOptionTwo:{
      type:String
    },
    pollOptionThree:{
      type:String
    },
    pollOptionFour:{
      type:String
    },
  });

const questionSchema = new Schema({
    questionText: {
      type: String,
      required: true,
      minLength: [10, "minimum 10 characters are allowed"]
    },
    options: {
      type: optionSchema,
      required: true
    },
    correctOption: {
      type: Number,
      default: 1,
    },
    questionImpression: {
      type: Number,
      default: 0
      
    }
  })

const quizSchema = new Schema({
    questions : {
        type:[questionSchema],
        required:true,

    },
    optionType:{
        type:String,
        enum : ["Text","ImageURL","TextAndImageURL"],
        required: true,

    },
    quizImpression:{
        type:Number,
        default: 0
    },
    createdBy:{
      type:mongoose.Schema.ObjectId,
      ref:"User",
      required:true
    },
    quizName : {
      type:String,
      maxLength:[40,"max 40 characters are allowed!"]

    },
    quizType:{
      type:String,
      enum: ["Q & A","Poll"],
      required:true
    }
},{
    timestamps:true
})






// const questionSchema = new Schema({
//     questionOne: {
//         type: String,
//         required: true,
//         minLength: [10, "minimum 10 characters are allowed!"],
//         maxLength: [40, "maximum 40 characters are allowed!"],
//         options: {
//           type: [optionSchema],
//           required: true,
//         },
//       },
//       questionTwo: {
//         type: String,
    
//         minLength: [10, "minimum 10 characters are allowed!"],
//         maxLength: [40, "maximum 40 characters are allowed!"],
//         options: {
//           type: [optionSchema],
//           required: true,
//         },
//       },
//       questionThree: {
//         type: String,
    
//         minLength: [10, "minimum 10 characters are allowed!"],
//         maxLength: [40, "maximum 40 characters are allowed!"],
//         options: {
//           type: [optionSchema],
//           required: true,
//         },
//       },
//       questionFour: {
//         type: String,
    
//         minLength: [10, "minimum 10 characters are allowed!"],
//         maxLength: [40, "maximum 40 characters are allowed!"],
//         options: {
//           type: [optionSchema],
//           required: true,
//         },
//       },
//       questionFive: {
//         type: String,
    
//         minLength: [10, "minimum 10 characters are allowed!"],
//         maxLength: [40, "maximum 40 characters are allowed!"],
//         options: {
//           type: [optionSchema],
//           required: true,
//         },
//       },
// })
// const quizSchema = new Schema({
//     questions:{
//         type:[questionSchema],
//         required:true
//     }
//     ,
//   createdBy :{
//     type:Schema.Types.ObjectId,
//     ref:"User",
//     required:true
// },
// optionType:{
//     type:String,
//     enum : ["Text","Image URL","Text & Image URL"],
//     required:true
    
// }
// },{
//     timestamps:true
// });











export const Quiz = model("Quiz",quizSchema)