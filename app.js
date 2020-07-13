var express  = require('express');
var bodyParser = require('body-parser');

var weathercontroller = require('./controllers/weathercontroller');

var app = express();



app.set('view engine', 'ejs');
app.use(express.static('./public'));


weathercontroller(app);

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
