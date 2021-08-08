const router = require('express').Router();
const { home } = require('@src/function');

router.get('/', home);

module.exports = router;
