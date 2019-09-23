const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const FacebookTokenStrategy = require('passport-facebook-token');
const User = require('./models/userModel')

// Google OAuth Strategy
passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: '815737839046-mdn1u1489c5sk11bhba2h1b7b94lk770.apps.googleusercontent.com',
    clientSecret: 'S5RnQOkGCL8i4vfoFCidRZLF',
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      console.log('profile', profile);
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);

      // check whether this current exists in db
      const existingUser = await User.findOne({"google.id": profile.id})
      if(existingUser){
        console.log('user already exists in our DB');
        
        return done(null, existingUser);
      }

      // if new account
      const newUser = new User({
        method: 'google',
        'google.id': profile.id,
        'google.email': profile.emails[0].value
      })
      await newUser.save();
      done(null, newUser)
    } catch (error) {
      done(error, false, error.message);      
    }
      
  }));

passport.use('facebookToken', new FacebookTokenStrategy({
  clientID: '959756107708923',
  clientSecret: 'ebd3972e0b89c1ecd940d37868787257'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('profile', profile);
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    
    const existingUser = await User.findOne({'facebook.id': profile.id})
    if(existingUser){
      return done(null, existingUser)
    }

    const newUser = new User({
      method: 'facebook',
      facebook: {
        id: profile.id,
        email: profile.id + '@gmail.com'
      }
    })

    await newUser.save();
    done(null, newUser)

  } catch (error) {
    done(error, false, error.message)
  }
}))


module.exports = passport