const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const MongoStore = require('connect-mongo')
const session = require('express-session')
const app = express()
const usersroute = require('./routes/users.js')
const url = "mongodb+srv://idifavour:Junebuzz123@cluster0.9zqd2.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.set('trust proxy', 1)
app.use(session({
    // store: MongoStore.create({mongoUrl: url}),
    secret: 'FE289B3464A9EE04FC73807E58C2543638AF551E2AAE3FACAFB6F39A3FB38BCA',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}))

app.use("/users", usersroute)

app.get('/', (req, res) => {
    res.send("Welcome to my site")
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Running on port 5000")
})