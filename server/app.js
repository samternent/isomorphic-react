var express   = require("express"),
    app       = express(),
    path      = require('path'),
    port      = process.env.PORT || 1337;


app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


require('./routes')(app);


app.listen(port, function () {
 console.log("Working on port " + port)
});
