const express = require('express'),
      mongoose = require('mongoose'),
      app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/to-do', { useMongoClient: true }, (err) => {
  err && console.error("Error: " + error);
});

app.set('view engine', 'ejs');
app.use(express.static('./deploy'));

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('blanks', {
    title: 'Mastering Flux',
    body: 'Hello World 1.2.3'
  });
});

app.listen(3000, () => {
  console.log('Server listen on port 3000...');
});
