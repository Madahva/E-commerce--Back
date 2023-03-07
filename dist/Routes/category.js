"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../Controlllers/category");
const router = (0, express_1.Router)();
router.post("/", category_1.crearcate);
router.get("/", category_1.getcategory);
router.get("/:id", category_1.getId);
exports.default = router;
