const express = require("express");
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");

const app = express();

// Cấu hình EJS và express-ejs-layouts
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(ejsLayouts);  // Sử dụng express-ejs-layouts

// Cấu hình thư mục tĩnh (CSS, JS, ảnh)
app.use(express.static(path.join(__dirname, "public")));

// Các route
const indexRouter = require("./routes/indexRoute");
const productsRouter = require("./routes/productsRoute");
const categoriesRouter = require("./routes/categoriesRoute");
const usersRouter = require("./routes/usersRoute");

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/users", usersRouter);

// Khởi động server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
