var express = require('express');
const allusers = require('../db/usersSchema');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', async function (req, res, next) {
  let data = await allusers.find({})
  res.json(data)
});
router.post('/', async function (req, res, next) {
  const { name, rollno, fav_subject } = req.body;
  let data = await allusers.create({ name, rollno, fav_subject })
  res.status(201).json("sucessfully created")
});
router.put('/:id', async function (req, res, next) {
  const { name, rollno, fav_subject } = req.body;
  const { id } = req.params
  let data = await allusers.updateOne({ _id: id }, { name, rollno, fav_subject })
  res.status(201).json("sucessfully updated")
});
router.delete('/:id', async function (req, res, next) {
  const { id } = req.params
  // let data = await allusers.findByIdAndDelete({ _id: new Mongoose.ObjectId(id) });
  let data = await allusers.deleteOne({ _id: id });
  res.status(201).json("sucessfully deleted")
});

module.exports = router;
