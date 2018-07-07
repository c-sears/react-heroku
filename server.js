// REQUIRE DEPENENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')

const db = require('./models')

// CREATE AND CONFIGURE EXPRESS
const app = express();
const PORT = process.env.PORT || 8080;


console.log(`we are in ${process.env.NODE_ENV}`)

// DIRECTS EXPRESS TO HANDLE PARSING AND SERVE STATIC FILES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'client/build')))


// SERVE UP INDEX.HTML (REACT APPLICATION) TO ALL UNMATCHED REQUEST
app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client/build','index.html'))
})

// CREATE AND CONIFIGURE ROUTING OF DATA
require("./scripts/apiRouting")(app);
// require("./routing/htmlRoutes")(app);


db.sequelize.sync().then(function(){
    // START THE SERVER AND LISTEN FOR CHANGES
    app.listen(PORT, function() {
        console.log("Kwiri is running on http://localhost/:" + PORT + " and watching ... \n");
    });
})

