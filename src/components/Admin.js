import React, { useState } from "react";
import axios from 'axios';


function Admin() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [url, setUrl] = useState("");

    const createContent = () => {
        if (title === "" && year === "" && url === "") {
            alert('빈칸을 채워주세요');
        } else {
            axios.post('content/create', { title: title, year: year, url: url })
                .then(function (response) {
                    console.log(response);
                    if (response.data.save === "fail") {
                        alert('제목 중복입니다.');
                    } else {
                        alert('추가 성공!!');
                        
                    }
                })
                .catch(error => { console.log('error : ', error.response) });
        }
    }

    return (
        <div className="Admin">
            <h1>Admin</h1>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={year} onChange={e => setYear(e.target.value)} placeholder="Year" />
            <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="Url" />
            <button onClick={createContent}>Create</button>
        </div>
    );

}

export default Admin;