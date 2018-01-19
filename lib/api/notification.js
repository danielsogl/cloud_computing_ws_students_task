const bidding = require('../bidding');

function notify(req, res, next) {
  console.log('Bidding Notification received:');
  console.log(`${req.body.msg}`);
  bidding.bid(req.body.gameround, req.body.bidder, req.body.timeleft);
  res.send({ message: 'OK' });
}

function init(app) {
  app.post('/api/notification', notify);
  console.log(`*** API [POST] /api/notification registered`);
}

module.exports = {
  init
};
