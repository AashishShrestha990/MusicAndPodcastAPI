const express = require('express');
const Posts = require('../models/songs');
const router = express.Router();
// const jwt = require('jsonwebtoken');

router.post('/add', (req, res, next) => {
    
        Posts.create({
            name: req.body.name,
            genre:req.body.name,
            image: req.body.image,
        }).then((postsongs) => {
           // let token = jwt.sign({ _id: posty._id }, process.env.SECRET);
                        res.json({postsongs, status: 'Post success!' });
        }).catch(next);
    });




// router.route('/:id').get('/me',  (req, res, next) => {
//     res.json({ _id: req.post.id\, username: req.user.username, name: req.user.name, post: req.user.post, comment: req.user.comment, image: req.user.image });
// });
router.route('/')
    .get((req, res, next) => {
        Posts.find({})
            .then((postweet) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(postweet);
            }).catch(next);
    })
    .put((req, res, next) => {
        Posts.findOneAndUpdate({ author: req.user._id, _id: req.params.id }, { $set: req.body }, { new: true })
            .then((reply) => {
                if (reply == null) throw new Error("Task not found!");
                res.json(reply);
            }).catch(next);
    });

module.exports = router;
