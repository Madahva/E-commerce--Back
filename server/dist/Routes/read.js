"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const categories_service_1 = require("../Services/categories.service");
const products_service_1 = require("../Services/products.service");
router.get("/category", categories_service_1.readCategory);
router.get("/products", products_service_1.readProducts);
exports.default = router;
