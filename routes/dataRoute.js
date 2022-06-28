const express = require("express");
const router = express.Router();
const { getProjectsData } = require("../controllers/dataControllers");

router.get("/projectsdata", getProjectsData);

module.exports = router;
