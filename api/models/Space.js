import mongoose from "mongoose";

const SpaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    rooms: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Space", SpaceSchema);
