const express = require('express');
const bodyParser = require('body-parser');
// new instance of express
const app = express();

// require routes to use
app.use('/api', require('./routes/index'));

// configuration
const port = process.env.PORT || 3000;
// export server to use with other modules
exports.server = app.listen(port, () => {
  console.log('Server is using', port);
});

module.exports = app;
