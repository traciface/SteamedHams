const router = require('express').Router();
const { Games, User } = require('../models');
const withAuth = require('../util/auth');

router.get('/', async (req, res) => {
  try {
  res.render('home', { 
      logged_in: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/games", (req, res) => {
  console.log(req.session);
  Games.findAll({
    attributes: ["id", "appID", "playtime_forever" ],
  })
  // serialises the posts and then passes them into the template
    .then((gamesContent) => {
      const games = gamesContent.map((game) => game.get({ plain: true }));
      res.render("games", { games, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;