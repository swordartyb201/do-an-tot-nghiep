import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: {
          type: [Date],
        },
        // hours: {
        //   type: [Number],
        // },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
