//async times exercise solution

var http = require('http')
    , async = require('async');

var url = process.argv[2]
var port = process.argv[3]

var fetchUrl = "http://"+url+":"+port;

//create User
var newUser = function(id, next){

    id = id+1;
    return "{\"user_id\":"+id+"}";
}

 var saveUser = function(user, next) {

     var opts = {
         hostname: url,
         port: port,
         path: '/users/create',
         method: 'POST',
         body: JSON.stringify(user)
     };
     var request = http.request(opts, function(res){

         res.on('data', function(chunk){
         });
         res.on('end', function(){
             next();
         });
         res.on('error', function(err){

         });
     });
     request.write(user);
     request.end();
 }

async.series({

    post: function (done) {

        async.times(5, function(n, next){
            var user = newUser(n, function(err){
                next(err);
            });
            saveUser(user, function(err){
                next(err)
            });

        }, function next(err){
            if (err) return done(err);
            done(null, 'saved');
        });

    },
    get: function (done) {

        http.get(fetchUrl + '/users', function(res){
            var body = "";
            res.on('data', function(success){
                body += success.toString();
            });

            res.on('end', function(){
                done(null, body);
            });
        }).on('error', done);
    }
},
    function(err,result){

        if (err) return console.log(err);
        else console.log(result.get);
    }
);
