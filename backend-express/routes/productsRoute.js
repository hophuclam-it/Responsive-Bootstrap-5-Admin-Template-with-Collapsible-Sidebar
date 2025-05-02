const express = require("express");
const router = express.Router();

// Trang sản phẩm
router.get("/", (req, res) => {
  res.render("products", { title: "Sản Phẩm" });
});

module.exports = router;
