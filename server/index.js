const express = require('express')
const app = express()
const cors = require('cors')
const { application } = require('express')
const mongoose = require('mongoose')
const User = require('./models/user.model.js')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session') 

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(express.json())

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    key: "userId",
    secret: "hello",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))

mongoose.connect('mongodb+srv://ng47:Tlmx2H763X@cluster0.blxwv.mongodb.net/RPL?retryWrites=true&w=majority')

app.post('/api/users/register', async (req,res) => {
    console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password, 
        })
        res.json({status: 'ok'})
    } catch (err) {
        console.log(err)
        res.json({status: 'error', error: 'Duplicate email'})
    }

    
})

app.post('/api/users/login', async (req,res) => {
        const user = await User.findOne({
            email: req.body.email, 
            password: req.body.password
        })
        if(user){
            req.session.user = user.name
            console.log(req.session)
            const token = jwt.sign({
                name: user.name,
                email: user.email,

            }, 'secret123')

            return res.json({status: 'ok', user: token})
        } else {
            console.log('Unsuccessfully Logged In')
            return res.json({status: 'error', user: false})
        }
        
})

app.get('/api/main', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    return res.json({status: 'ok', quote: user.quote})
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})

app.post('/api/main', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.updateOne(
        {email: email }, 
        {$set: { quote: req.body.quote} }
        
        )
    return {status: 'ok'}
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})
app.listen(1337, () => {
    console.log("Server started on port 1337")
})