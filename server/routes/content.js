const Content = require('../../models/content');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log('http://localhost:4000/content/');
    const contents = await Content.find({});
    res.json(contents);
});

router.post('/create', (req,res)=>{
    var data = req.body;

    const directors = data.director.split(',');
    const actors = data.actors.split(',');
    const genres = data.genre.split(',');

    const content = new Content({
        title : data.title,
        desc: data.desc,
        director : directors,
        actors : actors,
        year: Number(data.year),
        genre : genres,
        movieRating : data.movieRating,
        url: data.url
    });
    
    content.save((err)=>{
        if(err){
            console.log(err);
            res.send({save : "fail"});
        }
        else{
            res.send({save : "success"});
        }
    })
})

router.post('/createReview', (req, res)=>{
    var data = req.body;
    console.log(data);
    const review = {id : data.id, email : data.email, rating: data.rating, text: data.reviewText};
    Content.updateOne({_id : data.content_id}, {$push : {reviews : review}})
        .then(() => {
            Content.findById(data.content_id)
                .then(t_content => {
                    // console.log(data);
                    var t_RatingNum = t_content.ratingNumber;
                    var t_Rating = t_content.rating;
                    console.log(t_RatingNum);
                    console.log(t_Rating);

                    var t_total = t_RatingNum * t_Rating + data.rating;
                    t_RatingNum++;
                    t_total = t_total / t_RatingNum;

                    console.log(t_total);

                    Content.findByIdAndUpdate(data.content_id, {rating : t_total, ratingNumber : t_RatingNum}, (err, data)=>{
                        if(err){
                            let result = { success : false};
                            res.status(500).json(result);
                        }else{
                            let result= {success : true, content : data};
                            res.status(200).json(result);
                        }
                    })
                })
        })
        .catch(err => console.log(err))
})



module.exports = router;