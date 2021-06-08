const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const gameRoutes = require("./gameRoutes.js");

router.use("/users", userRoutes);
router.use("/games", gameRoutes);

module.exports = router;
