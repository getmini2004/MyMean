/* GET home page. */
const index = (req, res) => {
  res.render('index', { title: 'Welcome To WPM Deployment....' });
};

module.exports = {
    index
};