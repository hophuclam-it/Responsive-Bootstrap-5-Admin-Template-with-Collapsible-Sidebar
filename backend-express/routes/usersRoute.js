const express = require("express");
const router = express.Router();

// Trang người dùng
router.get("/", (req, res) => {
  res.render("users", { title: "Người Dùng" });
});

module.exports = router;
