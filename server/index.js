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
const { body, validationResult } = require('express-validator');
const { passwordStrength } = require('check-password-strength')

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
        const pass = req.body.password;
        if(req.body.password != req.body.password2){
            res.json({status: 'error', error: 'Passwords do not match!'})
        }
        var pattern = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
          );
        if(!pattern.test(pass)){
            res.json({status: 'error', error: 'Password too weak! Please make sure password contains an uppercase letter, lowercase letter, special character & numeric value!'})
        }
        else {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            exp: 0,
            progress: 0,
            achievement: 0,
            score: 0,         
        })
        res.json({status: 'ok'})
    }
    } catch (err) {
        console.log(err)
        res.json({status: 'error', error: 'Email already exists!'})
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
    return res.json({status: 'ok', name: user.name, exp: user.exp})
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})

app.get('/api/main2', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    return res.json({status: 'ok', name: user.name, exp: user.exp, score: user.score, progress: user.progress, achievement: user.achievement})
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

app.get('/api/quiz', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    return res.json({status: 'ok', exp: user.exp, progress: user.progress, achievement: user.achievement})
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})

app.post('/api/quiz', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    const user2 = await User.updateOne(
        {email: email }, 
        {$set: { exp: user.exp + 25} }
        
        )
    return {status: 'ok'}
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})

app.post('/api/quiz2', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    const user2 = await User.updateOne(
        {email: email }, 
        {$set: { exp: user.exp + 25} }
        
        )
    return {status: 'ok'}
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})

app.post('/api/prog', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    if(user.progress >= 100){
        return {status: 'ok'}
    }
    const user2 = await User.updateOne(
        {email: email }, 
        {$set: { progress: user.progress + 5} }
        
        )
    return {status: 'ok'}
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})

app.post('/api/level', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    const user2 = await User.updateOne(
        {email: email }, 
        {$set: { score: user.score + 1,
                 exp: 25} },
        
        
        )
    return {status: 'ok'}
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})

app.post('/api/ach', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    if(user.achievement >= req.body.ach){
        return {status: 'bad'}
    } else {
    const user2 = await User.updateOne(
        {email: email }, 
        {$set: { achievement: user.achievement + 1} },
        
        )
    return res.json({status: 'ok', pog: 1})
    }
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})
app.get('/api/ach', async (req,res) => {

    const token = req.headers['x-access-token']

    try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email;
    const user = await User.findOne({email: email})
    if(user.achievement >= req.body.ach){
        return {status: 'bad'}
    } else {
    return res.json({status: 'ok', pog: 1})
    }
    } catch(error){
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
    
})
app.listen(1337, () => {
    console.log("Server started on port 1337")
})