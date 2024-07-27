const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

// Old
// router.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
// });

// New
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
