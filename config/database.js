var mongoose = require('mongoose');
var dotenv = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
};
//mongoose.connect('mongodb://localhost/collegeapp');
mongoose.connect(`mongodb://${dotenv.username}:${dotenv.password}@ds161574.mlab.com:61574/college_app`);


// shortcut to mongoose.connection object
var db = mongoose.connection;

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
});
