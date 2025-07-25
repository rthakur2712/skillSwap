import mongoose,{ Schema }  from "mongoose";

const feedbackSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  starRating:{
    type:Number,
    required:true,
  },
  description:{
    type:String,
    maxLength:500
  }
})
const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback