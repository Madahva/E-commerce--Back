"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Brand_1 = require("../Controlllers/Brand");
const router = (0, express_1.Router)();
router.get("/:id", Brand_1.getIdbrand);
router.get("/", Brand_1.getbrand);
router.post("/CreateByCategory", Brand_1.createByBrand);
exports.default = router;
