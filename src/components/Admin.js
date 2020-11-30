import React, { useState } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';


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
    return (
        <div className="Admin">
            <h1>Admin</h1>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required /><p />
            <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="줄거리" cols="40" rows="8" /><p />
            <textarea value={director} onChange={e => setDirector(e.target.value)} placeholder="제작자" /><p />
            <textarea value={actors} onChange={e => setActors(e.target.value)} placeholder="배우" /><p />
            <input type="text" value={year} onChange={e => setYear(e.target.value)} placeholder="개봉년도" /><p />
            <textarea value={genre} onChange={e => setGenre(e.target.value)} placeholder="장르" /><p />
            <input type="text" value={movieRating} onChange={e => setMovieRating(e.target.value)} placeholder="관람등급" /><p />
            <textarea value={url} onChange={e => setUrl(e.target.value)} placeholder="Poster URL" cols="40" /><p />
            <button onClick={createContent}>Create</button>
        </div>
    );
}



function mapStateToProps(state) {
    return { state: state };
}

export default connect(mapStateToProps, null)(Admin);