import mongoose,{ Schema }  from "mongoose";


const skillSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Skill is mandatory']
  }
})
const Skill = mongoose.model('Skill',skillSchema);
export default Skill
