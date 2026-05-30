const User = require("../models/User");


const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};


const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = { createUser, getUsers };