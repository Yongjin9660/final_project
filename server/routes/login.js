const User = require('../../models/user');
const crypto = require("crypto");
const express = require('express');
const router = express.Router();
const passport = require('passport');
const movie = require('../../models/movie');
const LocalStrategy = require('passport-local').Strategy;

router.get('/', (req, res) => {
    var body = req.body;
    console.log('http://localhost:4000/login');
    res.send(body);
});

router.get('/signup', (req, res) => {
    console.log('http://localhost:4000/login/SignUp');
    res.send('Here is SignUp');
});

router.post('/', async (req, res, next) => {
    var data = req.body;
    console.log('email : ' + data.email + 'pwd : ' + data.password);
    // User.find({ email: data.email, password: crypto.createHash('sha512').update(data.pwd).digest('base64') }, function (err, user) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.json(user);
    //     }
    // });
    const users = await User.find({});
    res.json(users);
})

// router.post('/', async (req, res, next) => {
//     console.log('http://localhost:4000/api/');
//     const movies = await Movie.find({});
//     console.log(movies);
//     res.json(movies);
// });

router.post('/signup', (req,res)=>{
    var data = req.body;
    console.log(data);

    console.log(data.admin);
    var isAdmin = false;

    if(data.admin === "Yongjin"){
        isAdmin = true;    
    }

    const user = new User({
        email : data.email,
        password: crypto.createHash('sha512').update(data.pwd).digest('base64'),
        name : data.name,
        isAdmin : isAdmin
    });
    user.save((err)=>{
        if(err){
            console.log('fail '+ err);
        }
        else{
            console.log('success! ');
        }
    })
    res.send("SignUp");
})

//로그인에 성공할 시 serializeUser 메서드를 통해서 사용자 정보를 세션에 저장
passport.serializeUser(function (user, done) {
    done(null, user);
});

//사용자 인증 후 요청이 있을 때마다 호출
passport.deserializeUser(function (user, done) {
    done(null, user);
});



module.exports = router;