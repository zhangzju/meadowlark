var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

//定制404页面：not found
app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//定制500页面：internal server error
app.use(function(err, req, res,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log( 'Meadowlark started on http://localhost'+app.get('port')+'!');
});