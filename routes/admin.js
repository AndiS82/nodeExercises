const express = require("express");

const path = require("path");

// const rootDir = require("../util/path");

const adminController = require("../controllers/admin");

const router = express.Router();

// const products = [];

// router.get("/add-product", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
// });

// router.get("/add-product", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "add-product.html"));
// });

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// router.post("/add-product", (req, res, next) => {
//   console.log(req.body);
//   products.push({ title: req.body.title });
//   res.redirect("/");
// });

// /admin/add-product => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
