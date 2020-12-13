const Content = require('../../models/content');
const User = require('../../models/user');

const express = require('express');
const router = express.Router();

// 리뷰 정보를 조회
router.get('/:id', (req, res) => {
    Content.findById(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        })
})

// 리뷰 생성
router.post('/create', (req, res) => {
    var data = req.body;

    const review = { id: data.id, email: data.email, rating: data.rating, text: data.reviewText };
    const userReview = { content_id: data.content_id, rating: data.rating, text: data.reviewText, Date: data.id }

    Content.updateOne({ _id: data.content_id }, { $push: { reviews: review } })
        .then(() => {
            Content.findById(data.content_id)
                .then(t_content => {
                    let t_RatingNum = t_content.ratingNumber;
                    let t_Rating = t_content.rating;
                    let t_total = t_RatingNum * t_Rating + data.rating;
                    t_RatingNum++;
                    t_total = t_total / t_RatingNum;

                    User.updateOne({ email: data.email }, { $push: { reviews: userReview } })
                    .then(() => {
                        console.log("User Success");
                    })
                    Content.findByIdAndUpdate(data.content_id, { rating: t_total, ratingNumber: t_RatingNum }, (err, data) => {
                        if (err) {
                            let result = { success: false };
                            res.status(500).json(result);
                        }else{
                            res.status(200).json(data);
                        }
                    })
                })
        })
        .catch(err => console.log(err))
})

router.post('/delete/', (req, res) => {
    var data = req.body;
    console.log(data);

    Content.updateOne({ _id: data._id }, { $pull: { reviews: { id: data.date } } })
        .then(() => {
            Content.findById(data._id)
                .then((t_content) => {
                    let t_RatingNum = t_content.ratingNumber;
                    let t_Rating = t_content.rating;
                    let t_total = t_RatingNum * t_Rating - data.rating;
                    t_RatingNum--;
                    t_total = t_total / t_RatingNum;

                    Content.findByIdAndUpdate(data._id, { rating: t_total, ratingNumber: t_RatingNum }, (err, data) => {
                        if (err) {
                            let result = { success: false };
                            res.status(500).json(result);
                        }
                    })

                    User.updateOne({ email: data.email }, { $pull: { reviews: { Date: data.date } } })
                    .then(() => {
                        console.log("Delete Success");
                        let result = { success: true };
                        res.status(200).json(result);
                    })
                })
        })
        .catch(err => {
            console.log(err);
            let result = { success: false };
            res.status(500).json(result);
        })
})


router.post('/:user', async (req, res) => {

    var email = req.body.user;
    const Users = await User.find({});

    var user = Users.filter( user =>{
        return user.email === email
    });
    res.status(200).json(user);
});


module.exports = router;