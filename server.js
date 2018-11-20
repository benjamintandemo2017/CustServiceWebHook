var express = require('express'),
  config = require('./config'),  
  app = express(),
  port = process.env.PORT || 8888,
  mongoose = require('mongoose'),
  Enquiry = require('./api/models/enquiryModel'),
  bodyParser = require('body-parser');

const https = require('https');
  
let envVars = {
  dbuser: process.env.dbuser,
  dbpassword: process.env.dbpassword,
  dbpath: process.env.dbpath,
  dbname: process.env.dbname
};

mongoose.Promise = global.Promise;
var myDBUrl = config.dbUrl.format(envVars.dbuser,envVars.dbpassword,envVars.dbpath,envVars.dbname);

mongoose.connect(myDBUrl, { useNewUrlParser: true });//('mongodb://localhost/Roomdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/sRoutes');
routes(app);


app.listen(port, () => {
  console.log('Server is up and running...');
});

