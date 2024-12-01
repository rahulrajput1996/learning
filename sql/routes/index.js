var express = require('express');
var router = express.Router();
const { user } = require('../db/models');

router.get('/', async function (req, res, next) {
  let data = await user.findAll()
  res.json(data)
});

router.post('/', async function (req, res, next) {
  const {
    firstName,
    lastName,
    email
  } = req.body;
  let data = await user.create({
    firstName,
    lastName,
    email
  })
  res.status(201).json("sucessfully created")
});

router.put('/:id', async function (req, res, next) {
  const {
    firstName,
    lastName,
    email } = req.body;
  const { id } = req.params
  let data = await user.update({
    firstName,
    lastName,
    email
  }, { where: { id: id } })
  res.status(201).json("sucessfully updated")
});

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params
  let data = await user.destroy({ where: { id: id } });
  res.status(201).json("sucessfully deleted")
});

module.exports = router;
