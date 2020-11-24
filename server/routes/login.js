const User = require('../../models/user');
const crypto = require("crypto");
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.get('/', (req, res) => {
    var body = req.body;
    console.log('http://localhost:4000/login');
    res.send(body);
});

router.get('/SignUp', (req, res) => {
    console.log('http://localhost:4000/login/SignUp');
    res.send('Here is SignUp');
});

router.post('/', (req,res)=>{
    console.log(req.body);
    res.send("login");






    
})

router.post('/SignUp', (req,res)=>{
    var data = req.body;
    console.log(data);
    const user = new User({
        email : data.email,
        password: crypto.createHash('sha512').update(data.pwd).digest('base64'),
        name : data.name
        
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