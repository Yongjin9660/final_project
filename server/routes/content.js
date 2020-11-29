const Movie = require('../../models/movie');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log('http://localhost:4000/content/');
    const movies = await Movie.find({});
    console.log(movies);
    res.json(movies);
});

router.post('/create', (req,res)=>{
    var data = req.body;
    console.log(data);

    const movie = new Movie({
        title : data.title,
        year: Number(data.year),
        url : data.url,
    });
    
    movie.save((err)=>{
        if(err){
            res.send({save : "fail"});
        }
        else{
            res.send({save : "success"});
        }
    })
})



module.exports = router;