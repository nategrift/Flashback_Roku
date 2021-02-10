
const User = require('../models/user')
const newError = require('../util/error');

const { profileSuccess } = require('../util/responses')

exports.getProfiles = async (req, res, next) => {

    try {
      let profiles = await User.getProfiles(req.username);
      res.status(200).json({
        ok: true,
        profiles: profiles
      });
    } catch (err) {
      return next(newError(err))
    }
};

exports.postChooseProfile = async (req, res, next) => {
  try {
    let profile = await User.selectProfile(req.username, req.params.profileid, req.body.pin);
    
    profileSuccess(profile, res)
  } catch (err) {
    return next(newError(err))
  }
};