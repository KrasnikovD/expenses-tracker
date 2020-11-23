const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {port, mongoURL} = require('./config')

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true

})
.then(() => console.log('MongoDB dstabase is connected'))
.catch((err) => console.log(err))

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log('Express is running at port: '+ port))