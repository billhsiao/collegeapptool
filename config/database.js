var mongoose = require('mongoose');
var dotenv = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
};

var localRoute = 'mongodb://localhost/collegeapp';
var mLabRoute = `mongodb://${dotenv.username}:${dotenv.password}@ds161574.mlab.com:61574/college_app`;

mongoose.connect(mLabRoute);

// shortcut to mongoose.connection object
var db = mongoose.connection;

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});


db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
  reconnect();
});


function reconnect() {
  mongoose.connect(localRoute);
}
