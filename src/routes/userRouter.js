const dbService = require('../DBService');

const Router = require('express').Router;

const router = Router();

/**
 * this endpooint fetchs all users
 */
router.get('/', (req, res) => {
    try {
      const users = dbService.getUsers();
      return res.json({
        data: users
      });
    } catch(e) {
        return res.status(400).json({
            message: "something went wrong"
        })
    }
});

/**
 * add user
 */

router.post('/', (req, res) => {
    try {
        const userData = req.body;
        // do some validation, id, username, mobile,
        const user = {
            id: Date.now(),
            username: userData.username,
            email: userData.email
        };
        dbService.addUser(user);

        return res.json({
            data: user
        });

    } catch(e){
        return res.status(400).json({
            message: "bad request"
        })
    }
})

router.put('/', (req, res) => {
    try {
        const userData = req.body;
        // do some validation, id, username, mobile,
        const user = {
            id: userData.id,
            username: userData.username,
            email: userData.email
        };
        dbService.updateUser(user);

        return res.json({
            data: user
        });

    } catch(e){
        return res.status(400).json({
            message: "bad request"
        })
    }
})


router.delete('/:userId', (req, res) => {
    try {
        const userId = req.params.userId;
        dbService.removeUser(userId);
        return res.json({
            message: 'user deleted'
        });
    } catch(e) {
        return res.status(400).json({
            message: "bad request"
        }) 
    }
})

module.exports = router;