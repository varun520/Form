const express = require('express')
const mongoose = require('mongoose')
const details = require('./models/display')

const app = express();

const db = 'mongodb+srv://varun_sunny09:qnRHETh4aYQmeTKS@cluster0.by7l2ug.mongodb.net/college?retryWrites=true&w=majority'
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => {
        app.listen(3001)
    })
    .catch((err) => {
        console.log(err)
    })
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    details.find()
        .then((result) => {
            res.render('form', { title: 'Details', details: result })
        })
        .catch((err) => {
            console.log(err.message)
        })
})



app.post('/', (req, res) => {
    const info = new details(req.body);
    info.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err.message)
        })

})


console.log(`Listening at http://localhost:${3001}`)