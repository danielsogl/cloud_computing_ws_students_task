
function getHealthcheck(req, res, next) {
  res.send({ message: 'OK' });
}

function init(app) {
  app.get('/api/health', getHealthcheck);
  console.log(`*** API [GET] /api/health registered`);
}

module.exports = {
  init
};
