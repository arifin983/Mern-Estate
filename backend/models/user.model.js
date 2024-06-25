import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type:String,
      default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEC9B0_RFgVrHtFBOQGc_It46VvcoURzoxhNY-NYhVvA&s"
    }
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
export default User;
