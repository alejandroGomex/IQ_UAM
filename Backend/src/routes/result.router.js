const express = require('express');
const router_result = express.Router();
const result_schema = require('../models/result_model');

/* POST: http://localhost:5000/api/v1/result */
router_result.post('/result', (req, res) => {
  const result = result_schema(req.body);
  result
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET: http://localhost:5000/api/v1/result */
router_result.get('/', (req, res) => {
  result_schema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router_result.get('/:resultid', (req, res) => {
  const { resultId } = req.params;
  result_schema
    .findById(resultId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router_result;
