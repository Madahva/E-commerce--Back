"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopincard_1 = require("../Controlllers/shopincard");
const router = (0, express_1.Router)();
router.post("/", shopincard_1.shopicreate);
exports.default = router;
