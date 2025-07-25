import mongoose,{ Schema }  from "mongoose";
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, 'Please provide your name'],
    trim:true
  },
  email:{
    type:String,
    required:[true,'Please provide your email'],
    unique:true,
    lowercase:true,
    trim:true
  },
  password:{
    type:String,
    required:true,
    minLength:[8,'Password must be atleast 8 characters long']
  },
  bio:{
    type:String,
    maxLength:[250,'Keep it within 250 characters']
  },
  profilePicture:{
    type:String,
    default:'default_profilepic.png'
  },
  skillsToOffer:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Skill' // references to the skills datatype
  }],
  skillsToSeek:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Skill' // references to the skills datatype
  }],
  feedback:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Feedback' // references to the skills datatype
  }],
})

const User = mongoose.model('User',userSchema);
export default User
