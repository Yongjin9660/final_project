import axios from 'axios';
const crypto = require("crypto");

function Auth( email, password ){
    axios.post('/login', {})
    .then(function (response) {
        console.log('Here!');
        console.log(response.data);
        var users = response.data;
        console.log('Input :   ' + email + " : " + password);

        var result = null;

        users.map(function(user){
            console.log(user.email +" : "+user.password)
            if(email === user.email && crypto.createHash('sha512').update(password).digest('base64') === user.password){
                alert('로그인 성공!');
                console.log(user);
                result = user;
                //return user;
            }
        });
        console.log(result);
        return result;

    }.bind(this))
    .catch(error => { console.log('error : ', error.response) });
}

export default Auth;