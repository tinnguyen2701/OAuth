const express = require('express')
const passport = require('./passport')
const mongoose = require('mongoose');

const app = express()

// connect db
mongoose
  .connect('mongodb://localhost/oauth-test', { useNewUrlParser: true })
  .then(() => console.log('connected db'))
  .catch(err => console.log(err));


app.use(express.json());


app.post('/oauth/google', passport.authenticate('googleToken', {session: false}), (req, res, next) => {
    console.log('req user', req.user);
    
    return res.status(200).send({token})

    
})
 
app.listen(3000, () => {
    console.log('server is running');
})