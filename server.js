express=require('express');

app=express();

app.use(express.static('./'));

app.get('/',function(req,res){
	res.sendFile(
		'index.html',
		{root:__dirname+"/html/"},
		function(err){
		if(err){
			console.log(err);
		}
	});
});

app.listen(8000,function(){
	console.log('server started on port 8000');
});