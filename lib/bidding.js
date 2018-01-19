const env = require('./environment');
const rp = require('request-promise');
const rnd = require('./utils/random');

let bidData = {
  gameround: null,
  bidder: null,
  value: 10
};

let options = {
    method: 'POST',
    uri: `${env.gameserver}/api/bid`,
    body: bidData,
    json: true
};

function bid(gameround, me, timeleft) {
  bidData.gameround = gameround;
  bidData.bidder = me;
  console.log(`biddinground: ${JSON.stringify(gameround)}`);
  console.log(`timeleft: ${timeleft}`);

  //todo: implement your own logic !
  bidData.value = rnd.getRandomIntInclusive(10, 100);

  options.body = bidData;
  return rp(options)
    .then(function (parsedBody) {
      console.log(`successfully bid`);
    })
    .catch(function (err) {
      console.error(`Bid failed:`);
      console.error(err);
    });
}

module.exports = {
  bid
};
