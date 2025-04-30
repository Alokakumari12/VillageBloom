const express = require("express");
const router = express.Router();
const SellerController = require("../../Controllers/SellerManagement/SellerController");//seller controller path

router.get("/", SellerController.getAllDetails);
router.post("/", SellerController.addData);
router.get("/:id", SellerController.getById);//get
router.put("/:id", SellerController.updateData);//put
router.delete("/:id", SellerController.deleteData);//delete
router.post("/login", SellerController.login);//export

module.exports = router;