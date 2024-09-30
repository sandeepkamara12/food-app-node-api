const express = require('express');
const { registerController } = require('../controllers/authControllers');
const router = express.Router();

// * Important: User all routes
router.post('/register', registerController);

module.exports = router;