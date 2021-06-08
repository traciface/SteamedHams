const router = require('express').Router();
const { Games, User } = require('../models');
const withAuth = require('../util/auth');
const sequelize = require('../config/connection');

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
  //console.log(req.session.loggedIn)
  if (req.session.loggedIn) {
  console.log(req.session);
  Games.findAll({
    attributes: ["id", "appID", "title", "playtime_forever" ],
    
   
  })
  // serialises the posts and then passes them into the template
    .then((gamesContent) => {
      const games = gamesContent.map((game) => game.get({ plain: true }));
      res.render("games", { games, logged_in: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }
  else {
    res.redirect("/login")
  }
});

router.get("/game", (req, res) => {
 // console.log(req.session.loggedIn)
 if (req.session.loggedIn) {
    // single random encounter

  Games.findOne({
    attributes: ["id", "appID", "title", "playtime_forever" ],
    order: sequelize.literal('rand()')
   
  })
  // serialises the posts and then passes them into the template
    .then((randGame) => {
      console.log(randGame.dataValues)
      const game = randGame.dataValues;
      console.log(game.appID)
      res.render("game", { game, logged_in: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }
  else {
    res.redirect("/login")
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
