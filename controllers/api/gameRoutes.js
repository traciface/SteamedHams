const router = require("express").Router();
const {Games, User} = require("../../models");
const sequelize = require("../../config/connection");

// C- populate the database with list of games
router.post("/", (req, res) => {
    Post.create({
      appID: req.body.appID,
      playtime_forever: req.body.playtime_forever,
      user_id: req.session.user_id,
        })
        .then((postContent) => res.json(postContent))
        .catch((err) => {
            console.log(err);
            res.status(500)
                .json(err);
        });
});

// R- Read- get a single game
router.get("/:id", (req, res) => {
    Games.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "appID", "playtime_forever" ],
           
        })
       
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
            res.status(500)
                .json(err);
        });
});
// D- delete a post
Games.deleteAll = (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

module.exports = router;