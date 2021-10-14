require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./route/index')
const helmet = require('helmet')
const cors = require('cors')
const errMidlleware = require('./midllewares/error-midlleware')



const PORT = process.env.PORT || 5000
const app = express()
app.use(cors(
    {
        credentials: true,
        origin: process.env.API_CLIENT_URL
    }
))
app.use(express.json())
app.use(helmet());
app.use('/api/v1', router)
app.use(errMidlleware)

const startApp = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.listen(PORT, ()=>console.log('Server is started on ', PORT, ' port'))
    } catch (err) {
        console.log(err, 'Прозошла ошибка при страте сервера')
    }
}

startApp()

