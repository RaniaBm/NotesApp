const express = require('express')
const router = express.Router()

const r = require('../controllers/notesController.controllers')

router.get('/', r.home)

module.exports = router