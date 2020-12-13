const User = require('../../models/user');
const crypto = require("crypto");
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// 로그인 처리
router.post('/', async (req, res, next) => {
    const users = await User.find({});
    res.json(users);
})

// 회원가입 처리
router.post('/signup', (req,res)=>{
    var data = req.body;

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
            res.send({save : "fail"});
        }
        else{
            res.send({save : "success"});
        }
    })
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