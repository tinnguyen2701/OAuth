const express = require('express')
const passport = require('./passport')
const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');
const cors = require('cors')

const app = express()

// connect db
mongoose
  .connect('mongodb://localhost/oauth-test', { useNewUrlParser: true })
  .then(() => console.log('connected db'))
  .catch(err => console.log(err));


app.use(express.json());
app.use(cors());


signToken = user => {
  return JWT.sign({
    iss: 'CodeWorkr',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, 'STRING_SECRET');
}

app.post('/oauth/google', passport.authenticate('googleToken', {session: false}), (req, res, next) => {
    console.log('req user', req.user);
    const token = signToken(req.user);
    
    return res.status(200).send({token})
})

app.post('/oauth/facebook', passport.authenticate('facebookToken', {session: false}), (req, res, next) => {
  console.log('req.user', req.user);
  const token = signToken(req.user)
  return res.status(200).send({token});
})

app.listen(3001, () => {
    console.log('server is running');
})