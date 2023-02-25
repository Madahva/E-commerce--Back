"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const email_1 = require("../Controlllers/email");
//Envia mail cuando el pago fue exitoso
router.post("/pagado", email_1.pago);
//Envia mail cuando se crea usuario
router.post("/usuario", email_1.newUser);
exports.default = router;
