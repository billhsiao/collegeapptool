var express = require('express');
var router = express.Router();
var collegesCtrl = require('../controllers/colleges');

router.get('/', collegesCtrl.index);
router.get('/new', collegesCtrl.new);
router.post('/', collegesCtrl.create);
router.get('/:id/edit', collegesCtrl.edit);
router.put('/:id', collegesCtrl.update);
router.delete('/:id', collegesCtrl.remove);
router.get('/:id/expand', collegesCtrl.expand);
router.put('/:id', collegesCtrl.detail)

module.exports = router;
