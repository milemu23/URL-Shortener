// routes for url
module.exports = (express) => {
// import generator code
const generator = require('../../../models/generator');
const router = express.Router();
// import test data
const url = require('../../../data/url');

// generate short url
router.post('/urls', (req, res) => {
  req.body.shortURL = generator.generate();
  url.create(req.body, (err) => {
    res.status(500).json(err);
  }, (url) => {
    res.status(200).json(url);
  });
});



return router;
};
