const router = require('express').Router();
const controller = require('../Controllers/index.js');

router.post('/form', controller.postForm);

module.exports.router = router;