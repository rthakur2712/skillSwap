import User from "../models/User.js";
import Skill from "../models/Skill.js"

// now i have both the things now what i need is to add a skill to user, so the user can give me a list of the skills
const updateSkills = async(req,res)=>{
  
  const {skillsToOffer, skillsToSeek} = req.body;
  if(!Array.isArray(skillsToOffer) || !Array.isArray(skillsToSeek)){
    return res.status(400).json({message:"Skills request is not an array"});
  }

  try{
    console.log("skillsToOffer:",skillsToOffer);
    console.log("skillsToSeek:",skillsToSeek);
    const user = await User.findByIdAndUpdate(req.UserId,{
      skillsToOffer,skillsToSeek
    },{new:true});
    res.status(200).json({ message: "Skills updated" });
  }
  catch(err){
    res.status(500).json({message:"Skill update failed", "error:":err.message})
  }
};

const showSkills = async(req,res)=>{
  try{
    const user = await User.findOne(req.UserId);
    if( !user ){
      res.status(404).json({message:"User not found"});
    }
    res.json(user);
  }
  catch(err){
    return res.json({message:"Error:",err});
  }
}

export {updateSkills,showSkills};