const express = require("express");
const router = express.Router();

// @route Get api/auth
//@desxGet looged in user
//@access Privite
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route Post api/auth
//@desxGet Auth user & get token
//@access Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
