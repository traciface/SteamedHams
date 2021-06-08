const { Games } = require("../models");

router.get("/games", (req, res) => {
  console.log(req.session);
  games.findAll({
    attributes: ["id", "appID", "playtime_forever" ]
  })
  // serialises the games and then passes them into the template
    .then((postContent) => {
      const games = postContent.map((post) => post.get({ plain: true }));
      res.render("games", { games, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});