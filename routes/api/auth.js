const express = require("express")
const router = express.Router()
// const auth = require("../../middleware/auth")
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
// const config = require("config")
// const { check, validationResult } = require("express-validator")
// const User = require("../../models/User")

// GET api/auth
// get user by token
// private

router.get("/", (req, res) => {
  res.send("Auth route")
})

module.exports = router