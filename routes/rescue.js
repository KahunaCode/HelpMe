const express = require("express");
const router = express.Router();
const app = express();
// const config = require(`./config/${process.env.NODE_ENV}.js`)
const Rescue = require("../models").Rescue;

const passportService = require("../services/passport.js");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false });

const {
  ACCOUNT_SID,
  AUTH_TOKEN,
  ADMINS,
  RESCUERS,
  API_KEY
} = require("../config/sms");
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

router.post("/sms/rescue", requireAuth, (req, res) => {
  console.log("ZZZ", req.body.coordinates, req.user);

  let location = req.body.coordinates;

  console.log("helpee and location", location, req.user.phone);
  //console.log("client", client);
  for (let i = 0; i < 1; i++) {
    console.log("TESTING!")
    client.messages
      .create({
        to: "+1"+ req.body.phone,
        from: "+18082014699",
        body: "poop"
      })
      .then(message => {
        console.log(`sent a rescue message to ${RESCUERS}`);
      });
      console.log("ENDING?")
    res.end();
  }
});

router.post("/help_requests", function(req, res) {
  console.log("are we posting resque??", req.body);
  Rescue.create({
    helper_id: req.body.helper_id,
    helpee_id: req.body.helpee_id,
    time_start: req.body.time_start,
    time_closed: req.body.time_closed,
    reason_ended: req.body.reason_ended
  })
    .then(rescue => {
      return Rescue.findAll({
        order: [["time_start", "DESC"]],
        limit: 1,
        where: {
          helper_id: req.params.helper_id
        }
      }).then(rescue => {
        res.json(rescue);
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/help_requests/:id", function(req, res) {
  //this is to connect the helper to the helpee by rescue id
  console.log("console logging", req.body);
  var rescueId = parseInt(parseInt(req.params.id));
  Rescue.update(
    {
      helper_id: req.body.helper_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(data => {
      console.log("success");
      return Rescue.findById(data.id).then(rescue => {
        res.json(rescue);
      });
    })
    .catch(() => {
      console.log("fail");
    });
});

module.exports = router;
