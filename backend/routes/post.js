const express = require('express')
const multer = require('multer');
const path = require('path')
const MongoClient = require('mongodb').MongoClient;
const { v4: uuidv4 } = require('uuid')
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

// UPLOAD PROFILE IMAGE
const imageStorage = multer.diskStorage({
    destination: 'item_images',
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname))

    }
})

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
})

const getUser = (userId) => {
    console.log(userId)
    let query = { userId: userId }
    let options = {
        projection: { _id: 0, password: 0, userId: 0, date_joined: 0 }
    }
    let det
    db.collection('users').findOne(query, options, (err, res) => {
        det = res
        console.log(det)
    })
    return det

}

router.post('/uploadimages', utils.isLoggedIn, imageUpload.single('item_image'), (req, res) => {
    const url = req.protocol + '://' + req.get('host')
    let filename = url + '/item_images/' + req.file.filename
    res.send(filename)
}, (error, req, res, next) => {
    console.log(error)
    res.status(403).send({ status: 'error', error: error.message, data: null })
})


// Add item details to db
router.post('/additem', utils.isLoggedIn, (req, res, next) => {
    let item = req.body
    item.userId = req.session.user
    item.postId = utils.generateItemId()
    db.collection('items').insertOne(item, (err, result) => {
        if (err) return next(err)
        res.send({ status: 'ok', error: null, data: { msg: 'item added successfully' } })
    })
})

// select post from db
router.get('/getposts', async(req, res) => {
    let finArr = []
    let options = {
        projection: { _id: 0 }
    }
    let results = await db.collection('items').find({}, options).toArray()
    for (let i = 0; i < results.length; i++) {
        let userDetails = await db.collection('users').findOne({ userId: results[i].userId })
        let resObj = {
            date_added: results[i].date_added,
            postId: results[i].postId,
            images: results[i].images,
            postTitle: results[i].postTitle,
            postTags: results[i].postTags,
            userFullName: userDetails.firstname + ' ' + userDetails.lastname,
        }
        finArr.push(resObj)
    }
    res.send({ status: 'ok', error: null, data: finArr })

})

// get item details from db
router.get('/getpostdetails', async(req, res, next) => {
    let postId = req.query.postId
    let query = { postId: postId }
    let options = {
        projection: { _id: 0 }
    }
    let optionsTwo = {
        projection: { _id: 0, firstname: 1, lastname: 1 }
    }
    let postDetails = await db.collection('items').findOne(query, options)
    let userDetails = await db.collection('users').findOne({ userId: postDetails.userId }, optionsTwo)
    let result = {
        userDetails: userDetails,
        postDetails: postDetails
    }
    res.send({ status: 'ok', error: null, data: result })
})

router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({ status: 'error', error: err.message, data: null })
})

module.exports = router