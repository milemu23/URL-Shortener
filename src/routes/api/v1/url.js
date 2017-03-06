// routes for url
module.exports = (express) => {
// import generator code
const generator = require('../../../modules/generator');
const router = express.Router();
// import test data
const url = require('../../../models/url');

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
router.get('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  url.find(req.body, (err) => {
    res.status(500).json(err);
  }, (url) => {
    res.status(200).json(url);
  });
});

// update a url
router.post('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  url.update(req.body, (err) => {
    res.status(500).json(err);
  }, (url) => {
    res.status(200).json(url);
  });
});

// delete url
router.delete('/urls/:id', (req, res) => {
  req.body.id = req.params.id;
  url.delete(req.body, (err) => {
    res.status(500).json(err);
  }, (url) => {
    res.status(200).json(url);
  });
});

// redirect to shortened url
router.get('/go/:shortURL', (req, res) => {
  req.body.shortURL = req.params.shortURL;
  url.go(req.body, (err) => {
    res.status(500).json(err);
  }, (url) => {
    res.status(200);
    res.redirect(url.original);
  });
});

return router;
};
