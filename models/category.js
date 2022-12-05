import { Schema, model, models } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [80, "Max length (80)"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [500, "Max length (500)"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Category || model("Category", categorySchema);
