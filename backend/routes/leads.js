const express = require('express')

//import
const {
    getLeads,
    saveLead,
} = require("../controllers/leadController")

const router = express.Router()

router.get('/', getLeads)
router.post('/', saveLead)

module.exports = router