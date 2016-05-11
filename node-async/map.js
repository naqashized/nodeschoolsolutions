//async map excercise solution

var http = require('http')
  , async = require('async');

var args = process.argv;
args = args.slice(2,args.length);

async.map(args,function(url,done){

	var body = '';
	var page = http.get(url, function(res){
	    res.on('data', function(success){

	    	body += success.toString();
	    });
	    res.on('end',function(){

	    	return done(null, body);
	    });
	    res.on('error', function(err){
	    	done(err);

	    })

	});

},
function(err, results){
  if(err) console.error(err);
  else console.log(results);
});