const express = require("express");
const { login, register, listUsers } = require("../controllers/userControllers");
const router = express.Router();
router.get("/listUsers",listUsers); 
router.post("/login",login);
router.post("/register",register);



module.exports = router;
