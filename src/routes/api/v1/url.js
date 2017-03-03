// routes for url
module.exports = (express) => {
// import generator code
const generator = require('../../../models/generator');
const router = express.Router();
// import test data
const data = require('../../../data/db');

// url for the shortener
router.post('/urls', (req, res) =>  {
  const domain = 'localhost:3000/api/v1/url/';
  res.json('Original URL: ' + data.url + '\n' + 'Shortened URL: ' + domain + generator.generate(data.url));
});

return router;
};
