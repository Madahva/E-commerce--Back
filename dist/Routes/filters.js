"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filters_1 = require("../Controlllers/filters");
const router = (0, express_1.Router)();
router.get("/price", filters_1.filterProductsByPrice);
router.get("/brand", filters_1.filterProductsByBrand);
router.get("/category", filters_1.filterProductsByCategory);
router.get("/rating", filters_1.filterProductsByRating);
router.get("/name", filters_1.filterProductsByName);
router.get("/marca", filters_1.getBrand);
exports.default = router;