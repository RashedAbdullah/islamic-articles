import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

const categoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export { categoryModel };
