// routes for url
module.exports = (express) => {
// create router
const router = express.Router();

router. get('/', (req, res) => {
  res.json( {
    healthy: true,
  })
});

router.use('/api/v1', require('./api/v1/url')(express));


// returns router
return router;
};
