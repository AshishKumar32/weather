var PORT = process.env.PORT || 3000;
var express  = require('express');
var bodyParser = require('body-parser');

var weathercontroller = require('./controllers/weathercontroller');

var app = express();



app.set('view engine', 'ejs');
app.use(express.static('./public'));


weathercontroller(app);

app.listen(PORT , function(){
    console.log('Listening to port 3000');
});
