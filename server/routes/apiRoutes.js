const express = require("express");
const router = express.Router();
const path = require('path');
const controller = require('../controller/empController');


router.get("/load", controller.load);

router.get("/new", controller.new)

router.get("/update", controller.update);

router.post('/', controller.post);

router.delete('/:id', controller.delete);

router.put('/:id', controller.put);

module.exports = router;

