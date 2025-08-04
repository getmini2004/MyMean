/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome To Pavani....' });
});

module.exports = {
    index
};