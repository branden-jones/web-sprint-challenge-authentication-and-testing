const server = require('./api/server.js');

const JWT_SECRET = process.env.JWT_SECRET || 'secret' //eslint-disable-line

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
