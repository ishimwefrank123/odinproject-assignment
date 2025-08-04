const express = require("express");
const { indexRouteController, formRouteGetController, formSubmissionRouteController, getMessageController } = require("../controller/main.controller");
const router = express.Router();



//Index route
router.get("/",indexRouteController)

//Form route(GET)
router.get("/new",formRouteGetController)

//Form submission route (POST)
router.post("/new", formSubmissionRouteController)

router.get("/message/:id", getMessageController);


module.exports = router;