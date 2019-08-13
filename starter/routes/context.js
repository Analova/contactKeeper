const express = require("express");
const router = express.Router();

// @route Get api/context
//@desc Get all users contacts
//@access Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route Post api/context
//@desc Add new contact
//@access Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route Put api/context/:id
//@desc    Update contact
//@access Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route Delete api/context/:id
//@desc Update contact
//@access Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
