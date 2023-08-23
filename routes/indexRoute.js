const express = require('express');

const router = express.Router();

const { indexController } = require('../controllers/indexController.js');

router.route('/')
    .get(indexController.indexGET)

router.route('/translate')
    .post(indexController.indexPOST);

module.exports = router;