"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../Controlllers/User");
const router = (0, express_1.Router)();
router.get("/", User_1.getUser);
router.post("/", User_1.postuser);
exports.default = router;
