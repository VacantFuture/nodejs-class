const express = require('express');
const fake = require('faker');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.use('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'index.html')); 
})


app.listen(3002);