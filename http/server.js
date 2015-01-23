// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT


var router = express.Router();

var dishes = [
	{id: 1, label: 'Omelette', ingredients: 'eggs, bacon, cheese, peppers'},
	{id: 2, label: 'Fruit salad', ingredients: 'melon, papaya, kiwi, grapes'}	
];
var lastId = 6;

router.get('/dish', function(req, res) {
  res.send(dishes);
});
router.post('/dish', function(req, res) {
  var dish = req.body;
  dish.id = lastId;
  lastId++;
  dishes.push(dish);
  res.send(dish);
});

router.get('/dish/:id', function(req, res) {
  for (var i = 0; i < dishes.length; i++) {
    if (dishes[i].id == req.params.id) {
      res.send(dishes[i]);
      break;
    }
  }
  res.send({msg: 'dish not found'}, 404);
});
router.post('/dish/:id', function(req, res) {
  for (var i = 0; i < dishes.length; i++) {
    if (dishes[i].id == req.params.id) {
      dishes[i] = req.body;
      dishes[i].id = req.params.id;
      res.send(dishes[i]);
      break;
    }
  }
  res.send({msg: 'dish not found'}, 404);
});

router.post('/login', function(req, res) {
  console.log('API LOGIN FOR ', req.body);
  res.send({msg: 'Login successful for ' + req.body.username});
});


app.use('/api', router);



app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
