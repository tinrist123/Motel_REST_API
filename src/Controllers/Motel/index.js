const getAllRoom = require("./getAllRoom");
const getAllConfirmedRoom = require("./getAllConfirmedRoom");
const deleteRoom = require("./deleteRoom");
const UpdateRoom = require("./UpdateRoom");
const getMotelById = require("./getMotelById");
const postRoom = require("./postRoom");
const postRoomViewAll = require("./postRoomViewAll");
const postConfirmedRoomViewAll = require("./postConfirmedRoomViewAll");
const getRoomsByQuery = require("./getRoomsByQuery");
const PostRoomFilter = require("./PostRoomFilter");

module.exports = {
  PostRoomFilter,
  getRoomsByQuery,
  postConfirmedRoomViewAll,
  postRoomViewAll,
  getAllRoom,
  getAllConfirmedRoom,
  deleteRoom,
  UpdateRoom,
  getMotelById,
  postRoom,
};
