const { Games } = require("../models");

router.get("/games", (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: ["id", "appID", "playtime_forever" ],
    include: [
      {
        model: Games,
        attributes: ["id", "appID", "playtime_forever" ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
  // serialises the posts and then passes them into the template
    .then((postContent) => {
      const posts = postContent.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});