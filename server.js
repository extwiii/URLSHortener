var express = require('express');
var mongoose = require('mongoose');
var app = express();
var validUrl = require('valid-url');
var mongo = require('mongodb').MongoClient

var localUrl = process.env.MONGOLAB_URLSHORT_URL || 'mongodb://localhost:27017/urlshort' ;

var urlObject = {
	originalUrl : "",
	shortUrl : ""
}


app.get('/:url',function(req,res){

	var checkUrl = "http://localhost:3000/" + req.params.url;
	mongo.connect(localUrl, function(err, db) {
      if (err) throw err
      var urls = db.collection('urls')
      urls.findOne({
        	shortUrl:checkUrl
    	},function(err, docs) {
        	if (err) throw err
	        if (docs) {

	        res.redirect(docs.originalUrl);
	      	} else {
	        // we don't
	        res.json({error: "URL invalid"});
			}

        	db.close()
      	})

    })

    
});

app.get('/new/:url*',function(req,res){
	
	var url = req.url.slice(5); //remove the '/new/' portion from url

	if (!validUrl.isWebUri(url)) {
        return res.json({error: "URL invalid"});
	}	

	urlObject = {
		originalUrl : url,
		shortUrl : "http://localhost:3000/"+ getRandom(1,1000).toString()
	}


	mongo.connect(localUrl, function(err, db) {
    	if (err) throw err
    	var urls = db.collection('urls')
      	urls.insert(urlObject, function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(urlObject))
        db.close()
      })
    })
	res.json(urlObject);		

});


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} 
  
  



var port = process.env.PORT || 3000; 

app.listen(port, function () {
  console.log('Node.js listening on port ' + port);
});
