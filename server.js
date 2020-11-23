const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {port, mongoURL} = require('./config')
const transactionsRoutes = require('./routes/transactions')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

mongoose
    .connect(mongoURL, {
    useNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true

    })
    .then(() => console.log('MongoDB dstabase is connected'))
    .catch((err) => console.log(err))

app.use('/api/transactions', transactionsRoutes)

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log('Express is running at port: '+ port))