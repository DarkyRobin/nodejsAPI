const { getAlluser, createUser } = require("../models/userModels");
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required()
});
const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.json(users);
    console.log(res)
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res, next) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const newUser = await createUser(req.body);
  } catch (error) {
    
  }
};

module.exports = { getUsers, addUser };