const pkg = require('../../package.json');
const os = require('os');

function getInfo(req, res, next) {
  res.send({ name: pkg.name, version: pkg.version, instance: os.hostname(), hosttype: os.type() });
}

function init(app) {
  app.get('/api/info', getInfo);
  console.log(`*** API [GET] /api/info registered`);
}

module.exports = {
  init
};
