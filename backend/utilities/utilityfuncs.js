const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(403).send({ status: 'error', error: 'not logged in', data: null })
    }
}


module.exports = { isLoggedIn }