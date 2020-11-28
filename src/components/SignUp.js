import React, { useState } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminCode, setAdminCode] = useState("");
    const [signup, setsignup] = useState("");

    function btnClick() {
        if (name === "" || email === "" || password === "") {
            alert('빈칸을 채워주세요');
        } else {
            axios.post('login/signup', { name: name, email: email, pwd: password, admin: adminCode })
                .then(function (response) {
                    console.log(response);
                    if(response.data.save === "fail"){
                        alert('이메일 중복입니다.');
                    }else{
                        alert('회원가입성공!');
                        setsignup(true);
                    }
                })
                .catch(error => { console.log('error : ', error.response) });
        }
    }
    if(signup === true){
        return <Redirect to={{pathname: "/"}} />;
    }
    return (
        <div className="Signup">
            <h1>회원가입</h1>
            <h2>이름</h2>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <h2>Email</h2>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <h2>비밀번호</h2>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <h2>Admin Code</h2>
            <input type="text" value={adminCode} onChange={e => setAdminCode(e.target.value)} />
            <button onClick={btnClick}>회원가입</button>
        </div>
    );

}

export default SignUp;

// class SignUp extends React.Component{
//     constructor(props) {

//     btnClick = () => {
//         const { name, email, password, admin } = this.state;
//         console.log(name);
//         console.log(email);
//         console.log(password);
//         console.log(admin);
//         this.setState({Success : true});

        // axios.post('login/signup', {name : name, email : email, pwd : password, admin : admin})
        // .then(function(response){
        //     console.log(response);
        //     //console.log(this.state.succees);
        // })
        // .catch(error=>{console.log('error : ', error.response)});
//     }

//     render(){
//         if(this.state.Success === true){
//             console.log(this.state.Success);
//             return <Redirect to={{pathname: "/"}} />;
//         }
//         return(
//         <div className="SignUp">
//             <h1>회원가입</h1>
//                 <h3>NAME</h3>
//                 <p><input type="text" value={this.state.name} onChange={this.getName} required /></p>
//                 <h3>E-MAIL</h3>
//                 <p><input type="text" value={this.state.email} onChange={this.getEmail} required /></p>
//                 <h3>PASSWORD</h3>
//                 <p><input type="text" value={this.state.password} onChange={this.getPwd} required /></p>
//                 <h3>ADMIN CODE</h3>
//                 <p><input type="text" value={this.state.admin} onChange={this.getAdmin} /></p>
//                 <p><input type="button" onClick={this.btnClick.bind(this)} value="SignUp" /></p>
//         </div>
//         );
//     }
// }

// export default withRouter(SignUp);