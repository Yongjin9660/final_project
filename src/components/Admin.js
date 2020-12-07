import React, { useState } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import "../style/Admin.css";


function Admin({ state }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [director, setDirector] = useState("");
    const [actors, setActors] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [url, setUrl] = useState("");

    const createContent = () => {
        if (title === "" || desc === "" || director === "" || actors === "" || year === "" || genre === "" || movieRating === "" || url === "") {
            alert('빈칸을 채워주세요');
        } else {
            axios.post('content/create', {
                title: title, desc: desc, director: director,
                actors: actors, year: year, genre: genre,
                movieRating: movieRating, url: url
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.save === "fail") {
                        alert('제목 중복입니다.');
                    } else {
                        alert('추가 성공!!');
                        window.location.href = '/';
                    }
                })
                .catch(error => { console.log('error : ', error.response) });
        }
    }
    // *********  나중에 주석 해제 *********************
    // if (state.isAdmin) {
    //     return (
    //         <div className="Admin">
    //             <h1>Admin</h1>
    //             <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required /><p />
    //             <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="줄거리" cols="40" rows="8" /><p />
    //             <textarea value={director} onChange={e => setDirector(e.target.value)} placeholder="제작자" /><p />
    //             <textarea value={actors} onChange={e => setActors(e.target.value)} placeholder="배우" /><p />
    //             <input type="text" value={year} onChange={e => setYear(e.target.value)} placeholder="개봉년도" /><p />
    //             <textarea value={genre} onChange={e => setGenre(e.target.value)} placeholder="장르" /><p />
    //             <input type="text" value={movieRating} onChange={e => setMovieRating(e.target.value)} placeholder="관람등급" /><p />
    //             <textarea value={url} onChange={e => setUrl(e.target.value)} placeholder="Poster URL" cols="40" /><p />
    //             <button onClick={createContent}>Create</button>
    //         </div>
    //     );
    // }
    // else {
    //     return <Redirect to={{ pathname: "/login" }} />;
    // }
    // ****************************************************
    return (
        <div className="Admin">
            <div className="Admin_table">
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                            </td>
                        </tr>
                        <tr>
                            <td>작품 소개</td>
                            <td>
                                <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="줄거리" id="TA_desc"/>
                            </td>
                        </tr>
                        <tr>
                            <td>제작자</td>
                            <td>
                                <textarea value={director} onChange={e => setDirector(e.target.value)} placeholder="제작자" id="TA_direc"/>
                            </td>
                        </tr>
                        <tr>
                            <td>출연 배우</td>
                            <td>
                                <textarea value={actors} onChange={e => setActors(e.target.value)} placeholder="배우" />
                            </td>
                        </tr>
                        <tr>
                            <td>년도</td>
                            <td>
                                <input type="text" value={year} onChange={e => setYear(e.target.value)} placeholder="년도" />
                            </td>
                        </tr>
                        <tr>
                            <td>장르</td>
                            <td>
                                <textarea value={genre} onChange={e => setGenre(e.target.value)} placeholder="장르" id="TA_genre" />
                            </td>
                        </tr>
                        <tr>
                            <td>관람등급</td>
                            <td>
                                <input type="text" value={movieRating} onChange={e => setMovieRating(e.target.value)} placeholder="관람등급" />
                            </td>
                        </tr>
                        <tr>
                            <td>포스터 URL</td>
                            <td>
                                <textarea value={url} onChange={e => setUrl(e.target.value)} placeholder="Poster URL" id="TA_url" />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">
                                <button onClick={createContent}>Create</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>


                {/* <span>제목</span>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
                <span>설명</span>
                <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="줄거리" cols="40" rows="8" />
                <textarea value={director} onChange={e => setDirector(e.target.value)} placeholder="제작자" />
                <textarea value={actors} onChange={e => setActors(e.target.value)} placeholder="배우" />
                <input type="text" value={year} onChange={e => setYear(e.target.value)} placeholder="개봉년도" />
                <textarea value={genre} onChange={e => setGenre(e.target.value)} placeholder="장르" />
                <input type="text" value={movieRating} onChange={e => setMovieRating(e.target.value)} placeholder="관람등급" />
                <textarea value={url} onChange={e => setUrl(e.target.value)} placeholder="Poster URL" cols="40" />
                <button onClick={createContent}>Create</button> */}
            </div>
        </div>
    );
}



function mapStateToProps(state) {
    return { state: state };
}

export default connect(mapStateToProps, null)(Admin);