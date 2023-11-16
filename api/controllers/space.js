import Space from "../models/Space.js";
import Room from "../models/Room.js";

export const createSpace = async (req, res, next) => {
  const newSpace = new Space(req.body);

  try {
    const savedSpace = await newSpace.save();
    res.status(200).json(savedSpace);
  } catch (err) {
    console.error(err);
    res.status(500).json("Co loi khi tao co so");
    next(err);
  }
};
export const updateSpace = async (req, res, next) => {
  try {
    const updatedSpace = await Space.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSpace);
  } catch (err) {
    next(err);
  }
};
export const deleteSpace = async (req, res, next) => {
  try {
    await Space.findByIdAndDelete(req.params.id);
    res.status(200).json("Space has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getSpace = async (req, res, next) => {
  try {
    const space = await Space.findById(req.params.id);
    res.status(200).json(space);
  } catch (err) {
    next(err);
  }
};
export const getSpaces = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const spaces = await Space.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(spaces);
  } catch (err) {
    next(err);
  }
};
export const countByLocation = async (req, res, next) => {
  const locations = req.query.locations.split(",");
  try {
    const list = await Promise.all(
      locations.map((location) => {
        return Space.countDocuments({ location: location });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const getSpaceRooms = async (req, res, next) => {
  try {
    const space = await Space.findById(req.params.id);
    const list = await Promise.all(
      space.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
