const express = require("express")
const path = require('path')

const app = express();

//Middleware
app.use(express.static(path.join(__dirname,'public')))

app.get("/Intel/Alder-Lake", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get('/usuario', (req, res) => {
  res.send("<h1>Recibiendo info</h1>")
  console.log(req.query)
})

app.listen(5000, () => {
  console.log('Listening on port ' + 5000);
});