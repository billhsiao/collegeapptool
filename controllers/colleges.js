var College = require('../models/college');

module.exports = {
  index: index,
  new: newCollege,
  create: create,
  edit: edit,
  update: update,
  remove: remove,
  expand: expand,
  detail: detail
};

function index(req, res) {
  College.find({}, function(err, colleges) {
    res.render('colleges/index', {colleges: colleges});
  });
}

function newCollege(req, res) {
  res.render('colleges/new', {college: {}});
}

function create(req, res) {
  // if nowShowing checkbox not checked...
  //if (!req.body.nowShowing) req.body.nowShowing = false;
  // remove whitespace next to commas
  //req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  // remove empty properties
  for (var key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var college = new College(req.body);
  college.save(function(err) {
    // one way to handle errors
    if (err) return res.render('colleges/new');
    console.log(college);
    // for now, redirect right back to new.ejs
    res.redirect('/colleges');
  });
}

function edit(req, res, next) {
  College.findById(req.params.id, function(err, college) {
    // this way of handling errors triggers the error handlers
    // defined near the bottom of server.js
    if (err) return next(err);
    // the object below is using object shorthand property syntax
    res.render('colleges/edit', {college});
  });
}

function update(req, res) {
  //if (!req.body.nowShowing) req.body.nowShowing = false;
  //req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  //if (req.body.cast) req.body.cast = req.body.cast.split(',');
  College.findByIdAndUpdate(req.params.id, req.body, function(err, college) {
    if (err) return res.render(`colleges/'${req.params.id}'/edit`);
    res.redirect('/colleges');
  });
}

function remove(req, res) {
  College.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/colleges');
  });
}

function expand(req, res, next) {
  College.findById(req.params.id, function(err, college) {
    // this way of handling errors triggers the error handlers
    // defined near the bottom of server.js
    if (err) return next(err);
    // the object below is using object shorthand property syntax
    res.render('colleges/expand', {college});
  });
}
function detail(req, res) {
  //if (!req.body.nowShowing) req.body.nowShowing = false;
  //req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  //if (req.body.cast) req.body.cast = req.body.cast.split(',');
  College.findById(req.params.id, req.body, function(err, college) {
    if (err) return res.render(`colleges/'${req.params.id}'/expand`);
    res.redirect('/colleges');
  });
}

//
// function expand(req, res) {
//   College.find({}, function(err, colleges) {
//     res.render('colleges/index', {colleges: colleges});
//   });
// }
