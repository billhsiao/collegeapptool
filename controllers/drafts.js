var Draft = require ('../models/drafts');

module.exports = {
  index: index,
  new: newDraft,
  create: create,
  edit: edit,
  update: update,
  remove: remove
};

function index(req, res) {
  Draft.find({}, function(err, drafts) {
    res.render('colleges/index', {colleges: colleges});
  });
}

function newCollege(req, res) {
  res.render('colleges/new', {college: {}});
}

function create(req, res) {
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  for (var key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var college = new College(req.body);
  college.save(function(err) {
    if (err) return res.render('colleges/new');
    console.log(college);
    res.redirect('/colleges/new');
  });
}

function edit(req, res, next) {
  College.findById(req.params.id, function(err, college) {

    if (err) return next(err);
    res.render('colleges/edit', {college});
  });
}

function update(req, res) {
  College.findByIdAndUpdate(req.params.id, req.body, function(err, college) {
    if (err) return res.render('colleges/' + req.params.id + '/edit');
    res.redirect('/colleges');
  });
}

function remove(req, res) {
  College.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/colleges');
  });
}
