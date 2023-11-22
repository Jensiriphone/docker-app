const app = require('express')();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
  res.send(`Server ${PORT} is up and running AGAIN`);
});
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});