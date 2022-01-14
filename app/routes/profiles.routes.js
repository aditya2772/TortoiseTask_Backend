const profileCtrl = require('../controller/profiles.controller');
const express = require('express')
const router  = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());

//get all profile data
router.route('/profiles').get(function (req,res,next) {
    profileCtrl.fetechProfiles(req,res,next);
});

//get paused profile data
router.route('/pausedProfiles').get(function (req,res,next) {
    profileCtrl.fetechPausedProfiles(req,res,next);
});

//get single profile data
router.route('/profiles/:id').get(function (req,res,next) {
    profileCtrl.fetchProfile(req,res,next);
});

//create profile
router.route('/profiles').post(function (req,res,next) {
    profileCtrl.createProfile(req,res,next);
});

//update profile using id
router.route('/profiles/:id').put(function (req,res,next) {
    profileCtrl.updateProfile(req,res,next);
});


//delete profile using id
router.route('/profiles/:id').delete(function (req,res,next) {
    profileCtrl.deleteProfile(req,res,next);
});


module.exports = router;