var express = reuqire('express');

var app = exspress();

app.set('port', process.env.PORT || 3000);

//定制404页面
app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})