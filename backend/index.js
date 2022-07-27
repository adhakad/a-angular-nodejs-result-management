const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}))

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/class', require('./routes/class'));
app.use('/subject', require('./routes/subject'));
app.use('/class-subject', require('./routes/classSubject'));
app.use('/student', require('./routes/student'));
app.use('/result', require('./routes/result'));