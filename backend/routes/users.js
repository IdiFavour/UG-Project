const express = require('express')
const MongoClient = require('mongodb').MongoClient
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt');
const utils = require('../utilities/utilityfuncs')

// MongoDB connection
const url = "mongodb+srv://idifavour:Junebuzz123@cluster0.9zqd2.mongodb.net/?retryWrites=true&w=majority";
let db
MongoClient.connect(url, (err, client) => {
    if (err) {
        console.log(err)
    }
    db = client.db()
})

const router = express.Router()

// UTILITY FUNCTIONS 
const emailExists = async(email) => {
    let query = { email: email }
    const userCount = await db.collection('users').countDocuments(query)
    if (userCount === 0) {
        return false
    }
    return true
}

const authenticateUser = async(email, password) => {
    let query = { email: email }
    const options = {
        projection: { _id: 0, email: 1, password: 1, userId: 1 },
    };
    let checkEmail = await emailExists(email)
    if (checkEmail) {
        const user = await db.collection('users').findOne(query, options)
        const verifyPass = await bcrypt.compare(password, user.password);
        if (verifyPass) {
            return { status: true, data: { userId: user.userId } }
        } else {
            return { status: false, data: null }
        }
    }
    return { status: false, data: null }
}

// REGISTER NEW USER
router.post('/register', async(req, res, next) => {
    let userDetails = req.body
    let hash = await bcrypt.hash(userDetails.password, 10)
    userDetails.password = hash
    userDetails.userId = uuidv4()
    let checkEmail = await emailExists(userDetails.email)
    if (checkEmail == false) {
        db.collection('users').insertOne(userDetails, (err, result) => {
            if (err) return next(err)
            res.send({ status: 'ok', error: null, data: { msg: 'registration successful' } })
        })
    } else {
        res.status(403).send({ status: 'error', error: 'email already exists', data: null })
    }
})

// LOGIN OLD USER
router.post('/login', async(req, res, next) => {
    let userDetails = req.body
    let userValid = await authenticateUser(userDetails.email, userDetails.password)
    if (userValid.status == true) {
        req.session.user = userValid.data.userId
        res.send({ status: 'ok', error: null, data: { msg: 'login successful' } })
    } else {
        res.status(403).send({ status: 'error', error: 'Invalid login credentials', data: null })
    }
})

// GET USER'S DETAILS FROM DB
router.get('/getuserdetails', utils.isLoggedIn, async(req, res) => {
    let userId = req.session.user
    let query = { userId: userId }
    let options = {
        projection: { _id: 0, password: 0, userId: 0 }
    }
    const itemsCount = await db.collection('users').countDocuments(query)
    if (itemsCount >= 1) {
        db.collection('users').findOne(query, options, (err, results) => {
            if (err) return next(err)
            res.send({ status: 'ok', error: null, data: results })
        })
    }
})

// select post from db
router.get('/getuserposts', async(req, res) => {
        let userId = req.session.user
        let query = { userId: userId }
        let options = {
            projection: { _id: 0 }
        }
        let results = await db.collection('items').find(query, options).toArray()
        res.send({ status: 'ok', error: null, data: results })

    })
    // GET USER'S VIEW DETAILS FROM DB
router.get('/userdetails', (req, res) => {
    let userId = req.query.userId
    let query = { userId: userId }
    console.log(userId, query)
    let options = {
        projection: { _id: 0, password: 0 }
    }
    db.collection('users').findOne(query, options, (err, result) => {
        if (err) return next(err)
        res.send({ status: 'ok', error: null, data: result })
        console.log(result)
    })
})

//GET ALL USERS
router.get('/getusers', async(req, res) => {
    let options = {
        projection: { _id: 0, password: 0 }
    }
    let results = await db.collection('users').find({}, options).toArray()

    res.send({ status: 'ok', error: null, data: results })

})


// CHECK IF USER IS LOGGED IN
router.post('/isloggedin', utils.isLoggedIn, (req, res) => {
    res.send({ status: 'ok', error: null, data: { msg: 'logged in' } })
})

module.exports = router