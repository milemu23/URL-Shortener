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
    // error code
    res.status(500).json(err);
  }, (url) => {
    // success code
    res.status(200).json(url);
  });
});

// get all urls
router.get('/urls', (req, res) => {
  url.findAll(req.body, (err) => {
    res.status(500).json(err);
  }, (url) => {
    res.status(200).json(url);
  });
});

// get single url
router.get('/:id', (req, res) => {
  req.body.id = req.params.id;
  url.find(req.body, (err) => {
    res.status(500).json(err);
  }, (url) => {
    res.status(200).json(url);
  });
});


return router;
};
