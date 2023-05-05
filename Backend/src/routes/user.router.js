const express = require('express');
const router_user = express.Router();
const user_schema = require('../models/user_model');

/* POST: http://localhost:5000/api/v1/people/user */
router_user.post('/user', (req, res) => {
  const user = user_schema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET: http://localhost:5000/api/v1/people */
router_user.get('/', (req, res) => {
  user_schema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET{:id}: http://localhost:5000/api/v1/people/userId */
router_user.get('/:userId', (req, res) => {
  const { userId } = req.params;
  user_schema
    .findById(userId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* PUT{:id}: http://localhost:5000/api/v1/people/userId */
router_user.put('/:userId', (req, res) => {
  const { userId } = req.params;
  const { user_email,user_password} = req.body;
  user_schema
    .updateOne({ _id: userId }, { $set: { user_email, user_password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* DELETE{:id}: http://localhost:5000/api/v1/people/userId */
router_user.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  user_schema
    .deleteOne({ _id: userId })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router_user;
