const router = require("express").Router();
const { Games, User } = require("../../models");
const sequelize = require("../../config/connection");

// C- populate the database with list of games
router.post("/", (req, res) => {
  Post.create({
    appID: req.body.appID,
    playtime: req.body.playtime_forever,
    user_id: req.session.user_id,
  })
    .then((postContent) => res.json(postContent))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// R- Read- get a single game
router.get("/:id", (req, res) => {
  Games.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "appID", "playtime_forever"],
  });
});

// R- Read- get all games
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: ["id", "appID", "playtime_forever"],
    order: [["playtime_forever", "DESC"]],
  })
    .then((postContent) => res.json(postContent.reverse()))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// D- delete a post
router.delete("/del", (req, res) => {
  Games.destroy({
    where: {},
  }).then(function (result) {
    res.json({
      status: 1,
      data: result,
    });
  });
});

module.exports = router;
