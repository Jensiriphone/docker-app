require('dotenv').config();
const app = require('express')();
const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

app.get('/', (req, res) => {
  res.send(`Server ${env} is up and running with new change`);
});
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});