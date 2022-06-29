const { app } = require('./app');
const { db } = require('./utils/db.util');

const port = '4000'

db.authenticate()
  .then(() => console.log('db authenticate'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('db sync'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`express server running on port: ${port}`);
});