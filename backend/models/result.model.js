import mongoose,{Schema,model} from "mongoose"

const resultSchema = new Schema({
    username:{
        type:String,
        
    },
    result:{
        type: String,
        required:true,
        default: ""
    },
    attempts:{
        type:Number,
        required:true,
        default: 0 
    },
    points:{
        type: Number,
        required:true,
        default: 0
    },
    resultFor :{
        type:String,
        
    }
    
},{
    timestamps:true
})

export const ResultModel = model("ResultModel", resultSchema)