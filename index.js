const todoRoutes = require('./routes/todo');
const connection = require('./db');
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');

connection();

app.use(express.json());
app.use(cors());

app.use('/api/todos', todoRoutes);

//for static
app.use(express.static(path.join(__dirname, 'client', 'build')));
// //for html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
