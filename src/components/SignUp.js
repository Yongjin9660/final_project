import React, { useState } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import '../style/Signup.css';

function SignUp({ state, history }) {
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
    function btnCancel(){
        history.goBack();
    }
    if(state.isLogin || signup){
        return <Redirect to={{pathname: "/"}} />;
    }
    return (
        <div className="Signup">
            <div className="Signup_table">
                <table>
                    <thead>
                        <th colSpan="2">회원가입</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="NAME" />
                            </td>
                        </tr>
                        <tr>
                            <td>EMAIL</td>
                            <td>
                                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="EMAIL" />
                            </td>
                        </tr>
                        <tr>
                            <td>PASSWORD</td>
                            <td>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="PASSWORD" />
                            </td>
                        </tr>
                        <tr>
                            <td>ADMIN CODE</td>
                            <td>
                                <input type="password" value={adminCode} onChange={e => setAdminCode(e.target.value)} placeholder="ADMIN CODE" />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">
                                <button onClick={btnClick} id="btn_signup">회원가입</button>
                                <button onClick={btnCancel}>취소</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

}

function mapStateToProps(state) {
    return { state: state };
}

export default connect(mapStateToProps, null)(SignUp);