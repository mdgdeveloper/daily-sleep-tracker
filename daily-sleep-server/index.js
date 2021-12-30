require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server working at ${process.env.PORT}`);
});
