const express = require("express")
const router = express.Router()
// const request = require("request")
// const axios = require("axios")
// const config = require("config")
// const auth = require("../../middleware/auth")
// const { check, validationResult } = require("express-validator")

// const Profile = require("../../models/Profile")
// const User = require("../../models/User")

// GET api/profile/me
// get current user's profile
// private

router.get("/", (req, res) => {
  res.send("Profile route")
})

module.exports = router