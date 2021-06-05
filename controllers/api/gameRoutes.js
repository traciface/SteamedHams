const router = require("express").Router();
const {Games, User} = require("../../models");
const sequelize = require("../../config/connection");

// C- Create a post
router.post("/", (req, res) => {
    Post.create({
            title: req.body.title,
            content: req.body.content,
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
router.delete("/:id", (req, res) => {
    Games.findAll({
            where: {
                id: req.params.id
            },
        })
});

module.exports = router;