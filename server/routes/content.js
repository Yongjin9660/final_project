const Content = require('../../models/content');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log('http://localhost:4000/content/');
    const contents = await Content.find({});
    res.json(contents);
});

router.post('/create', (req, res) => {
    var data = req.body;

    const directors = data.director.split(',');
    const actors = data.actors.split(',');
    const genres = data.genre.split(',');

    const content = new Content({
        title: data.title,
        desc: data.desc,
        director: directors,
        actors: actors,
        year: Number(data.year),
        genre: genres,
        movieRating: data.movieRating,
        url: data.url
    });

    content.save((err) => {
        if (err) {
            console.log(err);
            res.send({ save: "fail" });
        }
        else {
            res.send({ save: "success" });
        }
    })
})

module.exports = router;