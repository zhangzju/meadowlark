var express = require('express');
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

var app = express();

//配置模板引擎
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

//定制404页面：not found
app.use(function(req,res){
    res.status(404);
    res.render('404');
});

//定制500页面：internal server error
app.use(function(err, req, res,next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log( 'Meadowlark started on http://localhost'+app.get('port')+'!');
});