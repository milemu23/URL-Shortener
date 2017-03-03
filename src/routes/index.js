// import express
const express = require('express');
// create router
const router = express.Router();

router. get('/status', (req, res) => {
  res.json( {healthy: true} );
});

// returns router
module.exports = router;
