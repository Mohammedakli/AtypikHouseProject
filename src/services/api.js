const { Router } = require('express');
const basicsRouter = require('../modules/router');

const router = new Router();

// Service  API
router.use(basicsRouter);


module.exports = router;