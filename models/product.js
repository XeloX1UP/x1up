import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    author: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
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
    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: [30, "Max length (30)"],
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
    },
    stock: {
      type: Number,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
          required: [true, "Description is required"],
          trim: true,
        },
        ref: {
          type: String,
          required: [true, "Description is required"],
          trim: true,
        },
      },
    ],
    status: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Product || model("Product", userSchema);
