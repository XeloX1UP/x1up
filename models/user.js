import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      maxlength: [15, "Max length (15)"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      maxlength: [10, "Max length (10)"],
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      maxlength: [20, "Max length (20)"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      maxlength: [20, "Max length (20)"],
    },
    role: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "E-mail is required"],
      unique: true,
      trim: true,
      maxlength: [50, "Max length (50)"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default models.User || model("User", userSchema);
