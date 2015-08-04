require('coffee-script').register();


var React     = require('react/addons');
var ReactApp  = React.createFactory(require('../../src/scripts/app.coffee'));

var Data      = require('../../src/scripts/data/index.coffee');

var aws = require('aws-sdk');


var myReactRoute = function (res, data) {
  reactApp = React.renderToString( ReactApp({ data: Data[ data ] }) );

  res.render('index.ejs', {
      ReactApp: reactApp
    });
};


var S3_KEY = 'AKIAJXDOTPJHXQNEUDHA';
var S3_SECRET = '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';
var S3_BUCKET = 'the-album';
var S3_REGION = 'eu-west-1';


module.exports = function (app) {

  // Main app route

  app.get('/', function (req, res) {
    myReactRoute(res, 'home');
  });
  app.get('/home', function (req, res) {
    myReactRoute(res, 'home');
  });
  app.get('/work', function (req, res) {
    myReactRoute(res, 'work');
  });
  app.get('/about', function (req, res) {
    myReactRoute(res, 'about');
  });


  app.get('/sign', function (req, res) {
    aws.config.update({accessKeyId: S3_KEY, secretAccessKey: S3_SECRET, region: S3_REGION});

        var s3 = new aws.S3()
        var options = {
          Bucket: S3_BUCKET,
          Key: req.query.file_name,
          Expires: 60,
          ContentType: req.query.file_type,
          ACL: 'public-read'
        }

        s3.getSignedUrl('putObject', options, function(err, data){
          if(err) return res.send('Error with S3')

          res.json({
            signed_request: data,
            url: 'https://s3-' + S3_REGION + '.amazonaws.com/' + S3_BUCKET + '/' + req.query.file_name
          })
        })

  });



  app.get('/script.js', function (req, res) {
    res.sendfile("./dist/client/bundle_js.js");
  });
  app.get('/style.css', function (req, res) {
    res.sendfile("./dist/client/bundle_css.css");
  });
};
