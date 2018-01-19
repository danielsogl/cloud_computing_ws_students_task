const env = require('../environment');
const rp = require('request-promise');

function register(req, res, next) {
  let options = {
      method: 'POST',
      uri: `${env.gameserver}/api/registerBidder`,
      body: req.body,
      json: true
  };

  return rp(options)
    .then(function (parsedBody) {
      console.log(`successfully registered ${JSON.stringify(req.body)}`);
      res.send({ msg: `successfully registered ${JSON.stringify(req.body)}` });
    })
    .catch(function (err) {
      console.error(`Could not register ${req.body}`);
      console.error(err);
      res.status(500).send({ error: err, msg: 'Could not register Bidder'})
    });
}

function init(app) {
  app.post('/api/register', register);
  console.log(`*** API [POST] /api/register registered`);
}

module.exports = {
  init
};
