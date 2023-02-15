const Router = require("express");
const products =require("./products.js")
const router = Router();

router.use("/", products);

module.exports = router;
