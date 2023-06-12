require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const appRoutes = require("./routes/approutes");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }));

const port = process.env.PORT || 3000

//******* This is to force the table ********/
// const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const db = require("./models");
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});


appRoutes(app);

app.listen(port, ()=>{
    console.log('Server is running on ' + port)
})