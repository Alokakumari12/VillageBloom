const express = require("express");
const router = express.Router();
const PaymentController = require("../../Controllers/PaymentManagement/PaymentController");


router.post("/", PaymentController.addData);
//exxport
module.exports = router;