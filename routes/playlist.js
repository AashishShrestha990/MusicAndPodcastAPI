const express = require('express');
const Add = require('../models/playlists');
const router = express.Router();

router.post('/add', (req, res, next) => {
    
        Add.create({
            name: req.body.name,
            uname:req.body.uname,
        }).then((playlist) => {
                        res.json({playlist, status: 'Add success!' });
        }).catch(next);
    });




// router.route('/:id').get('/me',  (req, res, next) => {
//     res.json({ _id: req.post.id\, username: req.user.username, name: req.user.name, post: req.user.post, comment: req.user.comment, image: req.user.image });
// });
router.route('/')
    .get((req, res, next) => {
        Add.find({})
            .then((playlist) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(playlist);
            }).catch(next);
    })
    .put((req, res, next) => {
        Add.findOneAndUpdate({ author: req.user._id, _id: req.params.id }, { $set: req.body }, { new: true })
            .then((reply) => {
                if (reply == null) throw new Error("Task not found!");
                res.json(reply);
            }).catch(next);
    });

router.route('/:uname')
   .get((req, res, next) => {
        Posts.find({uname: req.params.uname})
            .then((playlist) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(playlist);
            }).catch(next);
    })
    ;

module.exports = router;
