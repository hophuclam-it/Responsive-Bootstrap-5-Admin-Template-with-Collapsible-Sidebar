const express = require("express");
const router = express.Router();

// Trang danh mục
router.get("/", (req, res) => {
  res.render("categories", { title: "Danh Mục" });
});

module.exports = router;
