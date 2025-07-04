const dbService = require('../DBService');

const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    try{
        const posts = dbService.getPosts();
        return res.json({
            post: posts
        });
    } catch(e) {
        return res.status(400).json({
            message: "something went wrong"
        })
    }
});

router.post('/', (req, res) => {
    try{
        const postData = req.body;

        const post = {
            id: Date.now(),
            postName: postData.postName,
            description: postData.description
        }
        dbService.addPost(post);

        return res.json({
            data: post
        });
    } catch(e) {
        return res.status(400).json({
            message: "bad request"
        })
    }
})

router.delete('/:postId', (req, res) => {
    try{
        const postId = req.params.postId;
        dbService.removePost(postId);
        return res.json({
            message: "user deleted"
        })
    } catch(e) {
        return res.status(400).json({
            message: "bad request"
        })
    }
})

module.exports = router;
