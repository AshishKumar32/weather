var express  = require('express');
var bodyParser = require('body-parser');

var weathercontroller = require('./controllers/weathercontroller');

var app = express();



app.set('view engine', 'ejs');
app.use(express.static('./public'));


weathercontroller(app);

app.listen(3000);
console.log('Listening to port 3000');