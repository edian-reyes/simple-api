var express		=	require('express');
var	bodyParser	=	require('body-parser');
var	mongoose	=	require('mongoose');

var app	=	express();

//Controllers
var dataController = require('./server/controllers/data-controller');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var dummyData = [];

var config = require("./server/config/config.js");
config.setConfig();

mongoose.connect(process.env.MONGOOSE_CONNECT);

app.get('/api/get-data', dataController.getData);
app.post('/api/post-data', dataController.postData);

/*app.post('/api/post-data', function(req, res){
	var newData = req.body.data;
	dummyData.push(newData);
	res.json({data: dummyData});
});*/

app.listen(3000, function(){
	console.log("Server is running...");
});