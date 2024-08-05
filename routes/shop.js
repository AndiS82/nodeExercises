const express = require("express");

const path = require("path");

const shopController = require("../controllers/shop");

// const rootDir = require("../oldFiles/util/path");
// const adminData = require("./admin");

const router = express.Router();

// Old
// router.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
// });

// Not so old
// router.get("/", (req, res, next) => {
//   console.log(adminData.products);
//   res.sendFile(path.join(rootDir, "views", "shop.html"));
// });

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
